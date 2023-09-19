import {useState, useEffect, useCallback} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from 'react-query';
import constate from 'constate';

const useOnlineManager = () => {
  const [isOnline, setIsOnline] = useState(false);

  const checkOnlineStatus = useCallback(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const isUserOnline = state.isConnected != null && state.isConnected;

      setIsOnline(isUserOnline);
    });

    return unsubscribe();
  }, []);

  useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    checkOnlineStatus();
  }, [checkOnlineStatus]);

  useEffect(() => {
    onlineManager.setOnline(isOnline);
  }, [isOnline]);

  return {isOnline, checkOnlineStatus};
};

export const [OnlineManagerProvider, useOnlineManagerContext] =
  constate(useOnlineManager);
