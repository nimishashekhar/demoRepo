import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from '../../reducers/rootReducer';


const configureStore = (preloadedState) => {
  const isDev = process.env.REACT_APP_NODE_ENV === 'development';
  
  const middlewares = [thunkMiddleware];
  const devMiddlewares = isDev ? [loggerMiddleware] : [];
  const middlewareEnhancer = applyMiddleware(...middlewares, ...devMiddlewares);

  const devEnhancers = isDev ? [monitorReducerEnhancer] : [];
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers, ...devEnhancers);
    
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export default configureStore;