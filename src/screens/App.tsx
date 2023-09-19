import React from 'react';
import Navigation from './../navigation/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StateProvider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import store from './../state/store';
import {AppThemeProvider} from '../hooks/useAppTheme';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: false}},
});
const App = () => {
  return (
    <StateProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </AppThemeProvider>
      </QueryClientProvider>
    </StateProvider>
  );
};

export default App;
