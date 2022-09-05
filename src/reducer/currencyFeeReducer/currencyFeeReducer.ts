import { createSlice } from "@reduxjs/toolkit";
import { SelectedCurrencyPair } from "../../types/currencyFeeTypes";

export const currencyFeeReducer = createSlice({
  name: "currencyFee",
  initialState: {
    currencyPairFeeInfo: localStorage.getItem("currencyFee")
      ? JSON.parse(localStorage.getItem("currencyFee") || "[]")
      : ([] as SelectedCurrencyPair[]),
    baseFeeRate: 0.5,
  },

  reducers: {
    addNewFeeToList: ({ currencyPairFeeInfo }, action) => {
      const existingCurrencyPairs = currencyPairFeeInfo.find(
        (pair: SelectedCurrencyPair) => JSON.stringify(pair) === JSON.stringify(action.payload)
      );
      console.log("payl", action.payload);

      if (JSON.stringify(existingCurrencyPairs) !== JSON.stringify(action.payload)) {
        currencyPairFeeInfo = [...currencyPairFeeInfo, action.payload];
        localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
      }
      currencyPairFeeInfo = [...currencyPairFeeInfo];
      localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
    },

    deleteFeeFromList: ({ currencyPairFeeInfo }, action) => {
      currencyPairFeeInfo = currencyPairFeeInfo.filter((pair: any, index: number) => {
        return action.payload !== index;
      });
      console.log("reducer fee", action.payload);
      localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
    },
  },
});

export const { addNewFeeToList, deleteFeeFromList } = currencyFeeReducer.actions;

export default currencyFeeReducer.reducer;