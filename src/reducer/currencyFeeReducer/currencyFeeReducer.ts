import { createSlice } from "@reduxjs/toolkit";
import { SelectedCurrencyPair } from "../../types/currencyFeeTypes";

export const currencyFeeReducer = createSlice({
  name: "currencyFee",
  initialState: {
    currencyPairFeeInfo: JSON.parse(localStorage.getItem("currencyFee") || "[]") as SelectedCurrencyPair[],
    baseFeeRate: 0.02,
  },

  reducers: {
    addNewFeeToList: ({ currencyPairFeeInfo }, action) => {
      const existingCurrencyPairs = currencyPairFeeInfo.find(
        (pair: SelectedCurrencyPair) => JSON.stringify(pair) === JSON.stringify(action.payload)
      );

      if (JSON.stringify(existingCurrencyPairs) !== JSON.stringify(action.payload)) {
        currencyPairFeeInfo = [...currencyPairFeeInfo, action.payload];
        localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
      }
      currencyPairFeeInfo = [...currencyPairFeeInfo];
      localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
    },

    deleteFeeFromList: ({ currencyPairFeeInfo }, action) => {
      currencyPairFeeInfo = currencyPairFeeInfo.filter((pair: SelectedCurrencyPair, index: number) => {
        return action.payload !== index;
      });
      localStorage.setItem("currencyFee", JSON.stringify(currencyPairFeeInfo));
    },

    editFeeFromList: ({ currencyPairFeeInfo }, action) => {
      const newEditedList = [...currencyPairFeeInfo, (currencyPairFeeInfo[action.payload].feePairBeingEdited = true)];

      localStorage.setItem("currencyFee", JSON.stringify(newEditedList));
    },

    saveFeeFromList: ({ currencyPairFeeInfo }, action) => {
      const newValue = action.payload;
      const newEditedList = [...currencyPairFeeInfo, (currencyPairFeeInfo[newValue.index].feePairBeingEdited = false)];
      localStorage.setItem("currencyFee", JSON.stringify(newEditedList));
    },
  },
});

export const { addNewFeeToList, deleteFeeFromList, editFeeFromList, saveFeeFromList } = currencyFeeReducer.actions;

export default currencyFeeReducer.reducer;
