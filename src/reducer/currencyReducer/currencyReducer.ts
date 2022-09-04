import { createSlice } from "@reduxjs/toolkit";

export type SelectedCurrencyPair = {
  base: string;
  fromCurrency: string;
  toCurrency: string;
  newFee: string;
  defaultFee: boolean;
};

export const currencyReducer = createSlice({
  name: "currency",
  initialState: {
    currencyPairFeeInfo: localStorage.getItem("currency")
      ? JSON.parse(localStorage.getItem("currency") || "[]")
      : ([] as SelectedCurrencyPair[]),
    baseFeeRate: 0.5,
  },

  reducers: {
    addNewFeeToList: ({ currencyPairFeeInfo }, action) => {
      const existingCurrencyPairs = currencyPairFeeInfo.find(
        (pair: SelectedCurrencyPair) =>
          JSON.stringify(pair) === JSON.stringify(action.payload)
      );
      console.log("payl", action.payload);

      if (
        JSON.stringify(existingCurrencyPairs) !== JSON.stringify(action.payload)
      ) {
        currencyPairFeeInfo = [...currencyPairFeeInfo, action.payload];
        localStorage.setItem("currency", JSON.stringify(currencyPairFeeInfo));
      }
      currencyPairFeeInfo = [...currencyPairFeeInfo];
      localStorage.setItem("currency", JSON.stringify(currencyPairFeeInfo));
    },

    deleteFeeFromList: ({ currencyPairFeeInfo }, action) => {
      currencyPairFeeInfo = currencyPairFeeInfo.filter(
        (pair: any, index: number) => {
          return action.payload !== index;
        }
      );
      console.log("reducer fee", action.payload);
      localStorage.setItem("currency", JSON.stringify(currencyPairFeeInfo));
    },
  },
});

export const { addNewFeeToList, deleteFeeFromList } = currencyReducer.actions;

export default currencyReducer.reducer;
