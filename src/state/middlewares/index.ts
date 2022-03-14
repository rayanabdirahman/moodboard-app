import thunk from 'redux-thunk';
import logger from 'redux-logger';
import onLoading from './loading';

const middlewares = [thunk, logger, onLoading];

export default middlewares;
