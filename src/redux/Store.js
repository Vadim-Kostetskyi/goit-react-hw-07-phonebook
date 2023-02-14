import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './Slise';

export const store = configureStore({
  reducer: {
    value: contactsReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
