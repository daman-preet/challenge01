import styled from 'styled-components/native';
import {HelperText, TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {rgba} from 'polished';

import {CustomTextInput} from './TextInput';

export const TextInputViewStyled = styled(View)``;

export const TextInputStyled = styled(TextInput).attrs(
  (prop: CustomTextInput) => {
    return {
      theme: {
        roundness: 6,
        colors: {
          placeholder: prop.borderColor ? prop.borderColor : rgba('grey', 0.4),
          primary: prop.borderColor ? prop.borderColor : '#095DCF',
        },
      },
    };
  },
)``;

export const ErrorTextStyled = styled(HelperText)`
  font-weight: 600;
  font-size: 14px;
  color: 'red';
`;
