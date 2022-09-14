import { createSlice } from "@reduxjs/toolkit";
import { SelectedCurrencyPair } from "../../types/currencyFeeTypes";

export const currencyFeeReducer = createSlice({
  name: "currencyFee",
  initialState: {
    currencyPairFeeInfo: JSON.parse(localStorage.getItem("currencyFee") || "[]") as SelectedCurrencyPair[],
    baseFeeRate: 0.02,
  },

  reducers: {
    addNewFeeToList: (state, action) => {
      const existingCurrencyPairs = state.currencyPairFeeInfo.find(
        (pair: SelectedCurrencyPair) => JSON.stringify(pair) === JSON.stringify(action.payload)
      );

      if (JSON.stringify(existingCurrencyPairs) !== JSON.stringify(action.payload)) {
        state.currencyPairFeeInfo = [...state.currencyPairFeeInfo, action.payload];
      }
      localStorage.setItem("currencyFee", JSON.stringify(state.currencyPairFeeInfo));
    },

    deleteFeeFromList: (state, action) => {
      state.currencyPairFeeInfo = state.currencyPairFeeInfo.filter((pair: SelectedCurrencyPair, index: number) => {
        return action.payload !== index;
      });

      localStorage.setItem("currencyFee", JSON.stringify(state.currencyPairFeeInfo));
    },

    editFeeFromList: ({ currencyPairFeeInfo }, action) => {
      const newEditedList = currencyPairFeeInfo.filter((pair: SelectedCurrencyPair, index: number) =>
        action.payload === index ? (pair.feePairBeingEdited = true) : pair
      );
      localStorage.setItem("currencyFee", JSON.stringify(newEditedList));
    },

    saveFeeFromList: ({ currencyPairFeeInfo }, action) => {},
  },
});

export const { addNewFeeToList, deleteFeeFromList, editFeeFromList, saveFeeFromList } = currencyFeeReducer.actions;

export default currencyFeeReducer.reducer;
