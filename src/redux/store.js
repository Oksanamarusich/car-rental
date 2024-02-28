import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filters/filterSlice';

 const persistConfig = {
  key: 'favorites',
  storage,
  
};


export const store = configureStore({
  reducer: {
    favorites: persistReducer(persistConfig, favoritesReducer),
    cars:carsReducer,
    filter:filterReducer,
},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);