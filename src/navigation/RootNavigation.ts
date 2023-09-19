import {useNavigationContainerRef} from '@react-navigation/native';
import includes from 'lodash/includes';

// Global Navigation Method
export const navigate = (routeName, params, n = 0) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigationRef = useNavigationContainerRef();
  setTimeout(() => {
    if (
      navigationRef.current?.getRootState() &&
      includes(navigationRef.current?.getRootState().routeNames, 'Main')
    ) {
      navigationRef.current?.navigate(routeName as never, params as never);
    } else if (n < 100) {
      navigate(routeName, params, n + 1);
    }
  }, 300);
};
