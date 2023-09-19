import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppThemeContext} from '../../../../hooks/useAppTheme';
import {Dialog, RenderIcon} from '../../../../components';
import {NAVBAR_HEIGHT} from '../../../../utils/constants';
import {listTypes} from '../../../../utils/common';

interface IProps {
  option?: string;
  name?: string;
  visible?: boolean;
  onValueChange?: (args: string) => void;
  onClose?: () => void;
}

const OptionsModal = ({
  visible,
  onClose,
  option,
  onValueChange,
  name,
}: IProps) => {
  const {colors} = useAppThemeContext();
  const [greetingMessage, setGreetingMessage] = useState('');

  useEffect(() => {
    if (visible) {
      const timeOfDay = new Date().getHours();
      let greeting = '';
      if (timeOfDay >= 4 && timeOfDay < 12) {
        greeting = 'Good Morning';
      } else if (timeOfDay >= 12 && timeOfDay < 16) {
        greeting = 'Good Afternoon';
        setGreetingMessage(' ' + name);
      } else {
        greeting = 'Good Night';
      }
      setGreetingMessage(greeting + ' ' + name + '!');
    }
  }, [visible]);

  const renderChoices = ({item}: any) => {
    const isSelected = item.value === option;

    return (
      <Pressable
        key={item.value}
        style={[
          styles.choicesItem,
          {
            borderColor: colors.lightGrey,
            backgroundColor: colors.background,
          },
        ]}
        onPress={() => {
          manageSelected(item);
        }}>
        <View style={styles.choicesItemContent}>
          <View style={styles.iconContainer}>
            <RenderIcon
              name={
                isSelected ? 'MdRadioButtonChecked' : 'MdRadioButtonUnchecked'
              }
              size={18}
              color={colors.primary}
            />
          </View>
          <Text
            numberOfLines={1}
            style={[
              styles.optionText,
              isSelected
                ? {color: colors.primary, fontWeight: 'bold'}
                : {color: colors.text, fontWeight: 'normal'},
            ]}>
            {item.label}
          </Text>
        </View>
      </Pressable>
    );
  };

  const manageSelected = item => {
    if (onValueChange) {
      onValueChange(item.value);
    }
  };

  return (
    <Dialog
      visible={visible}
      width={'100%'}
      height={'50%'}
      bottom={true}
      containerStyle={[
        styles.modal,
        {
          backgroundColor: colors.background,
        },
      ]}
      onDialogDismissed={() => {
        if (onClose) {
          onClose();
        }
      }}
      renderPannableHeader={() => {
        return (
          <View style={styles.dialogHeaderContainer}>
            <View style={styles.buttonView}>
              <Pressable
                onPress={() => {
                  if (onClose) {
                    onClose();
                  }
                }}
                style={[
                  styles.buttonContainer,
                  {
                    backgroundColor: colors.lightGrey,
                  },
                ]}>
                <RenderIcon
                  name="FaAngleDown"
                  size={18}
                  color={colors.darkestGrey}
                />
              </Pressable>
            </View>

            <View
              style={[
                styles.modalHeader,
                {
                  height: NAVBAR_HEIGHT,
                  borderBottomColor: colors.darkGrey,
                },
              ]}>
              <View>
                <Text
                  style={[
                    styles.modalTitle,
                    {
                      color: colors.text,
                    },
                  ]}>
                  {greetingMessage}
                </Text>
              </View>
            </View>
          </View>
        );
      }}>
      <SafeAreaView
        style={[{backgroundColor: colors.background}, styles.modalContainer]}>
        <FlatList
          data={listTypes}
          renderItem={renderChoices}
          contentContainerStyle={{}}
          keyExtractor={(item: any) => item.value}
          style={{marginBottom: 10}}
        />
      </SafeAreaView>
    </Dialog>
  );
};

export default OptionsModal;

const styles = StyleSheet.create({
  modal: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    width: 80,
    borderRadius: 10,
  },
  dialogHeaderContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
  },
  choicesItem: {
    borderRadius: 8,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconContainer: {
    marginRight: 5,
  },
  choicesItemContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
