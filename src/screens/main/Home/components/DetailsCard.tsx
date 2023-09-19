import React from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  Platform,
} from 'react-native';

import {useAppThemeContext} from '../../../../hooks/useAppTheme';

interface IProps {
  info: any;
}

const DetailsCard = ({info}: IProps) => {
  const {colors} = useAppThemeContext();
  const {width: windowWidth} = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width: windowWidth - 55,
          backgroundColor: colors.background,
        },
      ]}>
      <View>
        <Text style={[styles.textFont, {color: colors.darkestGrey}]}>
          {'Title: '}
          <Text style={[styles.textFont, {color: colors.text}]}>
            {info?.title}
          </Text>
        </Text>
      </View>
      <View>
        <Text style={[styles.textFont, {color: colors.darkestGrey}]}>
          {'Status: '}
          <Text style={[styles.textFont, {color: colors.text}]}>
            {info?.completed ? 'Completed' : 'In-progress'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 0.7,
    shadowRadius: 2,
    elevation: 4,
    marginVertical: 10,
    borderRadius: 6,
  },
  textFont: {
    fontSize: 14,
    fontWeight: '500',
  },
});
