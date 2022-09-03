export type Currency = {
    currency: string,
    rate: string,
}

const currencyData: Currency[] = [
    {
        currency: 'USD',
        rate: '1.0004',
    },
    {
        currency: 'JPY',
        rate: '139.34',
    },
    {
        currency: 'BGN',
        rate: '1.9558',
    },
    {
        currency: 'CZK',
        rate: '24.488',
    },
    {
        currency: 'DKK',
        rate: '7.4372',
    },
];

export const getCurrencyBloks = () => currencyData;

export default currencyData;
