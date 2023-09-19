import {
  createStore,
  combineReducers,
  applyMiddleware,
  CombinedState,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import {LOG_OUT_SUCCESS} from './auth/authActions';

const allReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (
  state:
    | CombinedState<{
        auth:
          | {
              loginData: any;
              loading: boolean;
              fetchError: boolean;
              errorMessage: string;
              userName: string;
              loggedIn: boolean;
            }
          | {
              userName: any;
              fetchError: boolean;
              errorMessage: string;
              loginData: {};
              loggedIn: boolean;
            }
          | {
              loggedIn: any;
              fetchError: boolean;
              errorMessage: string;
              loginData: {};
              userName: string;
            }
          | {
              loginData: any;
              fetchError: boolean;
              errorMessage: string;
              userName: string;
              loggedIn: boolean;
            };
      }>
    | undefined,
  action: {type: string},
) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === LOG_OUT_SUCCESS) {
    state = undefined;
  }

  return allReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
