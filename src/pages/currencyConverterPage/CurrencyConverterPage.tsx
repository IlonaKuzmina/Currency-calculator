import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store";
import { convertFromEuroToX, convertFromXToEuro, convertFromXToY } from "../../utils/currencyConverter/currencyConverter";
import { MainPageWrapper } from "../../components/MainPageWrapper/MainPageWrapper";
import { PageContentContainer } from "../../components/PageContentContainer/PageContentContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import SmallTitle from "../../components/SmallTitle/SmallTitle";
import { Footer } from "../../components/Footer/Footer";
import { ConverterResult } from "../../components/ConverterResult/ConverterResult";
import { CurrencyConverterForm } from "../../components/CurrencyConverterForm/CurrencyConverterForm";

export type EnteredValueDetails = {
    value: string;
    currencyTo: string;
    currencyFrom: string;
};

export const CurrencyConverterPage = () => {
    const lastUpdateTime = useSelector(({ currencyApi }: RootState) => currencyApi.lastUpdateTime);
    const currencyRate = useSelector(({ currencyApi }: RootState) => currencyApi.currencyNameRate);
    const currencyFee = useSelector(({ currencyFee }: RootState) => currencyFee);
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredValue, setEnteredValue] = useState<EnteredValueDetails[]>([]);
    const [toCurrency, setToCurrency] = useState("EUR");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [convertResult, setConvertResult] = useState("");
    const [calculatedConvertFee, setCalculatedConvertFee] = useState('');

    const updateFromCurrency = (option: string) => {
        setFromCurrency(option);
    };

    const updatetoCurrency = (option: string) => {
        setToCurrency(option);
    };

    const findToCurrRate = () => {
        return (currencyRate.find((currency: any) => currency['@_currency'] === toCurrency))['@_rate'];
    }

    const findFromCurrRate = () => {
        return (currencyRate.find((currency: any) => currency['@_currency'] === fromCurrency))['@_rate'];
    }

    const convertValue = () => {
        const isAddedNewFee = currencyFee.currencyPairFeeInfo
            .find((curPair) => curPair.fromCurrency === fromCurrency && curPair.toCurrency === toCurrency);
        const enteredCurrencyPairConvertRate = isAddedNewFee ? Number(isAddedNewFee?.newFee) : currencyFee.baseFeeRate;

        const handleFromEurCurrency = fromCurrency === 'EUR';
        const handleToEurCurrency = toCurrency === 'EUR';

        if (handleFromEurCurrency) {
            setConvertResult(convertFromEuroToX(enteredAmount, findToCurrRate(), enteredCurrencyPairConvertRate));
        } else if (!handleFromEurCurrency && handleToEurCurrency) {
            setConvertResult(convertFromXToEuro(enteredAmount, findFromCurrRate(), enteredCurrencyPairConvertRate));
        } else {
            setConvertResult(convertFromXToY(enteredAmount, findToCurrRate(), findFromCurrRate(), enteredCurrencyPairConvertRate));
        }

        const convFeeToProcentage = (enteredCurrencyPairConvertRate * 100).toFixed();
        setCalculatedConvertFee(`Conversion fee: ${convFeeToProcentage} %`);
    };

    return (
        <>
            <MainPageWrapper>
                <PageHeader title="XE Currency Converter" paragraph="Check live foreign currency exchange rates" />
                <PageContentContainer>
                    <SmallTitle> Check foreign currency exchange rates</SmallTitle>
                    <CurrencyConverterForm
                        enteredAmountHandler={(amount) => { setEnteredAmount(amount); }}
                        updateToCurrencyHandler={(value) => { updatetoCurrency(value); }}
                        updateFromCurrencyHandler={(value) => { updateFromCurrency(value); }} />
                    <ConverterResult
                        toCurrency={toCurrency}
                        fromCurrency={fromCurrency}
                        calculatedConvertFee={calculatedConvertFee}
                        convertResult={convertResult}
                        lastUpdateTime={lastUpdateTime}
                        enteredValue={enteredValue}
                        enteredAmount={enteredAmount}
                        onClickHandler={() => {
                            setEnteredValue([{ value: enteredAmount, currencyFrom: fromCurrency, currencyTo: toCurrency }]);
                            convertValue()
                        }} />
                </PageContentContainer>
            </MainPageWrapper>
            <Footer></Footer>
        </>
    );
};
