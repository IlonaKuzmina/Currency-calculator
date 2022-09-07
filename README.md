# Currency converter with the possibility to add currency conversion fees

- In the project is used: typescript, localstorage, Redux Toolkit, React Router, Hooks, Axios, fast-xml-parser, SCSS;
- UI section for calculating a conversion that optionally includes a fee, if it is configured.
<img src="https://user-images.githubusercontent.com/98387598/188852288-a764d4b9-97a1-49a7-a1e1-1b49577c6cd1.PNG" alt="currencyConverter" width="400">

- UI section for editing a list of currency conversion fees.
<img src="https://user-images.githubusercontent.com/98387598/188852275-1175ccea-6244-42c7-b908-ca805ac1b0ce.PNG" alt="feeEditor" width="400">

- As ECB endpoint doesn't set CORS headers, so in project is configured a proxy.
- Rate data link: https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml

## Fee editor section
- User can add and remove a given currency pair and direction;
- Fees are applied precisely in the configured direction (e.g. from EUR to GBP), but not in reverse.

## Currency Conversion section
- User can enter the amount to convert and select the currency from and which to convert to.
- If a fee is configured for the specified currency pair, it is applied to the conversion result.
- If no fee is set, a default one is used.
- The default fee is supplied in the application configuration.

## Getting Started with Create React App
