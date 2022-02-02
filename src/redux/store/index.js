import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '../reducer/rootReducer';
import middleware, { sagaMiddleware } from './middleware/devUtils';
import rootSaga from '../sagas/index';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = composeWithDevTools({});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
