export const convertFromEuroToX = (
  enteredAmount: string,
  currencyTo: string,
  enteredCurrencyPairConvertRate: number
) => {
  return (
    (Number(enteredAmount) - Number(enteredAmount) * enteredCurrencyPairConvertRate) *
    Number(currencyTo)
  ).toFixed(3);
};

export const convertFromXToEuro = (
  enteredAmount: string,
  currencyFrom: string,
  enteredCurrencyPairConvertRate: number
) => {
  return (
    (Number(enteredAmount) - Number(enteredAmount) * enteredCurrencyPairConvertRate) /
    Number(currencyFrom)
  ).toFixed(3);
};

export const convertFromXToY = (
  enteredAmount: string,
  currencyTo: string,
  currencyFrom: string,
  enteredCurrencyPairConvertRate: number
) => {
  const enteredCurrencyRate = Number(currencyTo) / Number(currencyFrom);
  return (
    (Number(enteredAmount) - Number(enteredAmount) * enteredCurrencyPairConvertRate) *
    enteredCurrencyRate
  ).toFixed(3);
};
