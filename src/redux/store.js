import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import { persistedReducer} from "./concactSlice";
import { filtersReducer } from "./filterSlice";


export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filtersReducer, 
  }, 
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },

});

export const persistor = persistStore(store);