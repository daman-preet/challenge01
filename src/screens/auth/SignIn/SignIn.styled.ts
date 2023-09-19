import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {Divider, TextInput} from './../../../components';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const MainView = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const PasswordInput = styled(TextInput)`
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const GridView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const TitleText = styled(Text)`
  margin: 0px 20px;
  font-size: 16px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const ImageView = styled.Image`
  height: 100px;
`;

export const DividerView = styled(Divider)`
  flex: 1;
`;

export const SocialSignInContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const SocialSignInButton = styled(GoogleSigninButton)`
  width: 200px;
  height: 50px;
`;
