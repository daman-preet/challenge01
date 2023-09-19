import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import get from 'lodash/get';
import DeviceInfo from 'react-native-device-info';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  MainView,
  AppVersionView,
  ProfileInfoView,
  TextView,
  DetailView,
  LogoutView,
} from './Menu.styled';

import {RootStackParamList} from '../../../navigation/TabNavigator';
import {useAppThemeContext} from '../../../hooks/useAppTheme';
import {RenderIcon} from '../../../components';
import {fillLoginData} from '../../../storage/UserData';
import {setLoginResponse} from '../../../state/auth/authActions';
import {getLoginData} from '../../../state/auth/authReducer';

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'MenuScreen'>;

const Menu = ({navigation}: MenuScreenProps) => {
  const {colors} = useAppThemeContext();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const loginData = useSelector(state => getLoginData(state));

  const handleLogOut = () => {
    fillLoginData({});
    dispatch(setLoginResponse({}));
  };

  useEffect(() => {
    setUserEmail(get(loginData, 'email', ''));
    setUserName(get(loginData, 'name', ''));
  }, [loginData]);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <MainView>
          <ProfileInfoView>
            <RenderIcon name={'FaUser'} size={60} color={colors.darkGrey} />
            <DetailView>
              <TextView style={[{color: colors.darkestGrey}]}>
                {'Name: '}
                <TextView style={[{color: colors.text}]}>{userName}</TextView>
              </TextView>
            </DetailView>
            <DetailView>
              <TextView style={[{color: colors.darkestGrey}]}>
                {'Email: '}
                <TextView style={[{color: colors.text}]}>{userEmail}</TextView>
              </TextView>
            </DetailView>
          </ProfileInfoView>
          <View style={{alignItems: 'center'}}>
            <LogoutView
              style={{
                backgroundColor: colors.background,
              }}
              onPress={() => {
                handleLogOut();
              }}>
              <RenderIcon name={'MdLogout'} size={35} color={colors.primary} />
            </LogoutView>
          </View>
          <AppVersionView>
            <TextView style={[{color: colors.darkestGrey}]}>
              {'Version: ' + DeviceInfo.getVersion()}
            </TextView>
          </AppVersionView>
        </MainView>
      </SafeAreaView>
    </>
  );
};

export default Menu;
