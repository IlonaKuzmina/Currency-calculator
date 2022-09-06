export const convertFromEuroToX = (
  enteredAmount: string,
  currencyTo: string,
  enteredCurrencyPairConvertRate: number
) => {
    console.log('viens')
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
    console.log('divi')
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
    console.log('tris')
  const enteredCurrencyRate = Number(currencyTo) / Number(currencyFrom);
  return (
    (Number(enteredAmount) - Number(enteredAmount) * enteredCurrencyPairConvertRate) *
    enteredCurrencyRate
  ).toFixed(3);
};

// - currencyTo, amount
// - currencyFrom, amount
// - currencyFrom, currencyTo, amount

// Pēc tam tev būs viena lielā funkcija, kurā atkarībā no padodtajām
// vērtībām izvēlēsies kuru funkciju pielietot un izmantosi tās rezultātu.
