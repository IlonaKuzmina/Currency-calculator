import { configureStore } from '@reduxjs/toolkit';
import currencyApiReducer from './API/currencyApiReducer';
import currencyFeeReducer from './currencyFeeReducer/currencyFeeReducer';

const store = configureStore({
  reducer: {
    currencyFee: currencyFeeReducer,
    currencyApi: currencyApiReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;