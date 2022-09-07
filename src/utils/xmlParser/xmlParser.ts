import { XMLParser } from "fast-xml-parser";
import { CubeCurrency, CurrencyApiResult } from "../../types/apiResultTypes";

export const parseXmlToJs = (currency: any) => {
  const options = {
    ignoreAttributes: false,
    attributesGroupName: "@_",
    ignoreDeclaration: true,
  };
  const parser = new XMLParser(options);
  const currencyApiResult = parser.parse(currency) as CurrencyApiResult;
  
  const lastUpdateTime = currencyApiResult["gesmes:Envelope"].Cube.Cube["@_"]["@_time"];
  const currencyNameRate = currencyApiResult["gesmes:Envelope"].Cube.Cube.Cube.map(
    (currency: CubeCurrency) => currency["@_"]
  );

  localStorage.setItem("lastUpdateTime", lastUpdateTime);
  localStorage.setItem("currencyNameRate", JSON.stringify(currencyNameRate));
};

export default parseXmlToJs;
