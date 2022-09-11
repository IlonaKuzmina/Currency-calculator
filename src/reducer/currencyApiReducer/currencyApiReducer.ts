import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CubeCurrencyResult } from "../../types/apiResultTypes";
import { parseXmlToJs } from "../../utils/xmlParser/xmlParser";

export const currencyApiReducer = createSlice({
  name: "currencyApi",
  initialState: {
    lastUpdateTime: localStorage.getItem("lastUpdateTime"),
    // lastUpdateTime: "",
    currencyNameRate: JSON.parse(localStorage.getItem("currencyNameRate") || "[]") as CubeCurrencyResult[],
  },

  reducers: {
    getAllCurrencyFromApi: (store) => {
      axios
        .get("http://localhost:3000/api/stats/eurofxref/eurofxref-daily.xml")
        .then((response) => {
          const currency = response.data;
          parseXmlToJs(currency);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    },

    getnewdata: (store) => {
      // getAllCurrencyFromApi();
      // store.lastUpdateTime = localStorage.getItem("lastUpdateTime");
    },
  },
});

export const { getAllCurrencyFromApi, getnewdata } = currencyApiReducer.actions;

export default currencyApiReducer.reducer;
