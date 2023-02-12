import { configureStore, createReducer } from '@reduxjs/toolkit';
import { persistClickReduser } from './Slise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import persistStore from 'redux-persist/es/persistStore';

// const myReduser = createReducer(10, {});

export const store = configureStore({
  reducer: {
    value: persistClickReduser,
  },
  middleware: (
    getDefaultMiddleware //прослойка
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
