import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { rootReducer } from './reducers';

// Sagas
import rootSaga from './sagas';

const configureStore = () => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  } else {
    store = applyMiddleware(...middlewares)(createStore)(rootReducer);
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
