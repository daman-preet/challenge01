import React, {useState, useEffect, useCallback} from 'react';
import {StatusBar, FlatList, View, Pressable} from 'react-native';
import {get, isEmpty} from 'lodash';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import {MainView, HeaderView, HeaderContainerView} from './Home.styled';
import AsyncStore from '../../../storage/AsyncStore';
import OptionsModal from './components/OptionsModal';
import {fetchList} from '../../../queries/home';
import DetailsCard from './components/DetailsCard';
import {useAppThemeContext} from '../../../hooks/useAppTheme';
import {Loader, RenderIcon} from '../../../components';
import {RootStackParamList} from '../../../navigation/TabNavigator';
import {setLoginResponse} from '../../../state/auth/authActions';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const Home = ({navigation}: HomeScreenProps) => {
  const [userName, setUserName] = useState('');
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('todos');
  const {colors} = useAppThemeContext();
  const [loader, setLoader] = useState({
    isLoading: true,
    message: 'Loading todos...',
  });
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  const getLoginInfoFromStorage = async () => {
    try {
      await AsyncStore.getItem('loginData', {}).then(data => {
        setUserName(get(data, 'name', ''));
        dispatch(setLoginResponse(data));
        setTimeout(() => {
          setIsOptionsVisible(true);
        }, 2000);
      });
    } catch (error) {
      console.log('error fetching login data', error);
    }
  };

  useEffect(() => {
    getLoginInfoFromStorage();
    setSelectedOption('todos');
  }, []);

  const getList = useCallback(async params => {
    try {
      setTimeout(() => {
        setLoader({isLoading: true, message: `Loading ${params}...`});
      }, 400);
      const response = await fetchList(params);
      if (response) {
        setTimeout(() => {
          setLoader({isLoading: false, message: ''});
          setListData(response);
        }, 1000);
      }
    } catch (err) {
      console.log('err during fetchList', err);
      setTimeout(() => {
        setLoader({isLoading: false, message: ''});
      }, 1000);
    }
  }, []);

  useEffect(() => {
    getList(selectedOption);
  }, [selectedOption]);

  const renderChoices = ({item}: any) => {
    return <DetailsCard info={item} />;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <MainView>
        {loader.isLoading ? (
          <Loader loading={loader.isLoading} title={loader.message} />
        ) : (
          <View style={{flex: 1}}>
            <Pressable
              onPress={() => {
                setIsOptionsVisible(true);
              }}>
              <HeaderContainerView>
                <HeaderView>{selectedOption}</HeaderView>
                <RenderIcon
                  name={'MdFilterList'}
                  size={20}
                  color={colors.primary}
                />
              </HeaderContainerView>
            </Pressable>
            {!isEmpty(listData) && (
              <FlatList
                data={listData}
                renderItem={renderChoices}
                keyExtractor={(item: any) => item.id}
                style={{marginBottom: 10}}
                contentContainerStyle={{}}
              />
            )}
          </View>
        )}
        <OptionsModal
          visible={isOptionsVisible}
          onClose={() => {
            setIsOptionsVisible(false);
          }}
          option={selectedOption}
          onValueChange={value => {
            setSelectedOption(value);
            setIsOptionsVisible(false);
          }}
          name={userName}
        />
      </MainView>
    </>
  );
};

export default Home;
