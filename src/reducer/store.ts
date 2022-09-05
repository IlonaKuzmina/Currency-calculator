import { configureStore } from '@reduxjs/toolkit';
import currencyApiReducer from './API/currencyApiReducer';
import currencyReducer from './currencyReducer/currencyReducer';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    currencyApi: currencyApiReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;