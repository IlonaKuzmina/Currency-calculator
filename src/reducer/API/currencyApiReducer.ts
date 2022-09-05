import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SelectedCurrencyPair } from "../../modals/currencyFeeModal";
import parseXmlToJs from "../../xmlParser/xmlParser";
import { XMLParser } from "fast-xml-parser";
import { CubeCurrency, CubeCurrencyResult, CurrencyApiResult } from "../../modals/apiResultModal";

export const currencyApiReducer = createSlice({
  name: "currencyApiReducer",
  initialState: {
    lastUpdateTime: "",
    currencyNameRate: [] as CubeCurrencyResult[],
  },

  reducers: {
    getAllCurrencyFromApi: (store) => {
      axios
        .get("http://localhost:3000/api/stats/eurofxref/eurofxref-daily.xml")
        .then((response) => {
          const currency = response.data;
          const parseXmlToJs = (currency: any) => {
            const options = {
              ignoreAttributes: false,
              attributesGroupName: "@_",
              ignoreDeclaration: true,
            };
            const parser = new XMLParser(options);
            const currencyApiResult = parser.parse(currency) as CurrencyApiResult;

            store.lastUpdateTime = currencyApiResult["gesmes:Envelope"].Cube.Cube["@_"]["@_time"];
            store.currencyNameRate = currencyApiResult["gesmes:Envelope"].Cube.Cube.Cube.map(
              (currency: CubeCurrency) => currency["@_"]
            );

            localStorage.setItem("lastUpdateTime", store.lastUpdateTime);
            localStorage.setItem("currencyNameRate", JSON.stringify(store.currencyNameRate));
          };
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    },
  },
});

export const { getAllCurrencyFromApi } = currencyApiReducer.actions;

export default currencyApiReducer.reducer;
