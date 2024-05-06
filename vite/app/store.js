import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import formReducer from '../features/form/formSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  employees: persistReducer({ key: 'employees', storage }, formReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
