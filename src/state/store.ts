import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import middlewares from './middlewares';
import { SessionState, UIState } from './interfaces';

export type State = {
  session: SessionState;
  ui: UIState;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
