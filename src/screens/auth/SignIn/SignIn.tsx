import React, {useState} from 'react';
import {StatusBar, Keyboard} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';

import {
  MainView,
  PasswordInput,
  GridView,
  TitleText,
  ImageContainer,
  ImageView,
  DividerView,
  SocialSignInContainer,
  SocialSignInButton,
} from './SignIn.styled';
import {TextInput} from './../../../components';
import {fillLoginData} from './../../../storage/UserData';
import {setLoginResponse} from './../../../state/auth/authActions';
import useYupValidationResolver from './../../../validation/resolver';
import {signInSchema} from './../../../validation/authValidation';
import {useAppThemeContext} from '../../../hooks/useAppTheme';
import Button from './../../../components/Button';

interface IProps {
  setLoginResponse?: any;
}

const SignInLayout = (props: IProps) => {
  const {colors} = useAppThemeContext();
  const [showPassword, setShowPassword] = useState(true);
  const [loginEnable, setLoginEnable] = useState(false);
  const [showButtonLoader, setShowButtonLoader] = useState(false);

  type FormData = {
    email: string;
    password: string;
  };

  const resolver = useYupValidationResolver(signInSchema);

  const {
    handleSubmit,
    control,
    getValues,
    clearErrors,
    formState: {errors},
  } = useForm<FormData>({
    resolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const checkLoginDisabled = () => {
    const value = getValues();
    if (value.email !== '' && value.password !== '') {
      setLoginEnable(true);
    } else {
      setLoginEnable(false);
    }
  };

  const handleLogin = (data: FormData) => {
    Keyboard.dismiss();
    setShowButtonLoader(true);
    let loginObject = {
      email: data.email,
      password: data.password,
      name: 'Test',
    };
    fillLoginData(loginObject);
    setTimeout(() => {
      setShowButtonLoader(false);
      props.setLoginResponse(loginObject);
    }, 300);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <MainView style={{backgroundColor: colors.background}}>
        <ImageContainer>
          <ImageView
            source={require('./../../../assets/images/images.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{resizeMode: 'contain'}}
          />
        </ImageContainer>
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              label="Email Address"
              onChangeText={text => {
                onChange(text.trim());
                checkLoginDisabled();
              }}
              value={value}
              error={!!errors.email}
              errorText={errors.email?.message}
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({field: {onChange}}) => (
            <PasswordInput
              testID="PasswordInputID"
              label="Password"
              secureTextEntry={showPassword}
              onIconPress={() => setShowPassword(!showPassword)}
              onChangeText={text => {
                clearErrors('email');
                onChange(text);
                checkLoginDisabled();
              }}
              error={!!errors.password}
              errorText={errors.password?.message}
            />
          )}
        />
        <Button
          label={'Sign In'}
          onPress={handleSubmit(handleLogin)}
          backgroundColor={colors.primary}
          fullWidth
          disabled={!loginEnable}
        />

        <GridView>
          <DividerView />
          <TitleText>{'OR'}</TitleText>
          <DividerView />
        </GridView>

        <SocialSignInContainer>
          <SocialSignInButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => {}}
            disabled={showButtonLoader}
            style={{}}
          />
        </SocialSignInContainer>
      </MainView>
    </>
  );
};

export default connect(() => ({}), {
  setLoginResponse,
})(SignInLayout);
