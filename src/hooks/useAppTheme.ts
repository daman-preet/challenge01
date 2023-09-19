import {useState} from 'react';
import {useColorScheme} from 'react-native';
import constate from 'constate';

import {lightColors, darkColors} from '../utils/constants';

const useAppTheme = () => {
  const initialThemeMode = useColorScheme() === 'dark' ? 'dark' : 'light';

  const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeMode);

  const colors = theme === 'light' ? lightColors : darkColors;

  const buttons = {
    sm: {
      width: 80,
      height: 30,
    },
    md: {
      width: 152,
      height: 42,
    },
    lg: {
      width: 240,
      height: 48,
    },
    xl: {
      width: '100%',
      height: 56,
    },
  };

  return {
    colors,
    theme,
    setTheme,
    buttons,
  };
};

export const [AppThemeProvider, useAppThemeContext] = constate(useAppTheme);
