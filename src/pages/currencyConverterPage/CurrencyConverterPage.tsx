import React, { useState } from "react";
import { useSelector } from "react-redux";
import { convertFromEuroToX, convertFromXToEuro, convertFromXToY } from "../../utils/currencyConverter/calculator";
import Button from "../../components/Button/Button";
import CurrencySelect from "../../components/CurrencySelect/CurrencySelect";
import Label from "../../components/Label/Label";
import { MainPageWrapper } from "../../components/MainPageWrapper/MainPageWrapper";
import { PageContentContainer } from "../../components/PageContentContainer/PageContentContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import SmallTitle from "../../components/SmallTitle/SmallTitle";
import { RootState } from "../../reducer/store";
import "./CurrencyConverterPage.scss";

type EnteredValueDetails = {
    value: string;
    currencyTo: string;
    currencyFrom: string;
};

export const CurrencyConverterPage = () => {
    const time = useSelector(({ currencyApi }: RootState) => currencyApi.lastUpdateTime);
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
        <MainPageWrapper>
            <PageHeader title="XE Currency Converter" paragraph="Check live foreign currency exchange rates" />
            <PageContentContainer>
                <div>
                    <SmallTitle> Check foreign currency exchange rates</SmallTitle>
                    <form onChange={() => { }}>
                        <div className="currency__container">
                            <div>
                                <Label label="Amount" /> <br />
                                <input
                                    className="currency__input"
                                    type="text"
                                    inputMode="decimal"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setEnteredAmount(e.target.value);
                                    }} />
                            </div>

                            <div>
                                <Label label="From" /> <br />
                                <CurrencySelect
                                    selectType={true}
                                    onChangeHandler={(value) => {
                                        updateFromCurrency(value);
                                    }}></CurrencySelect>
                            </div>

                            {/* <div>
                                <Label /> <br />
                                <Button btnClass="swaper">
                                    <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                                </Button>
                            </div> */}

                            <div>
                                <Label label="To" /> <br />
                                <CurrencySelect
                                    selectType={false}
                                    onChangeHandler={(value) => {
                                        updatetoCurrency(value);
                                    }}
                                ></CurrencySelect>
                            </div>
                        </div>
                    </form>

                    <div className="converter__result--container">
                        <div className="converter__result--wrapper">
                            <span className="result__input--value">{calculatedConvertFee}</span>
                            <span>
                                {enteredValue.map((value) => (
                                    <span key={value.value} className="result__input--value">
                                        {value.value} {value.currencyFrom} =
                                    </span>
                                ))}
                            </span>

                            <span className="converter__calculated--result">
                                {convertResult}{" "}
                                {enteredValue.map((value) => (
                                    <span key={value.value} className="">
                                        {value.currencyTo}
                                    </span>
                                ))}
                            </span>
                        </div>

                        <div className="converto__button--container">
                            <div className="converter__result--warning">
                                We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive
                                this rate when sending money.
                            </div>
                            <Button
                                label="Convert"
                                btnClass="add"
                                wrapperClass="add__btn--wrapper"
                                onClick={() => {
                                    setEnteredValue([{ value: enteredAmount, currencyFrom: fromCurrency, currencyTo: toCurrency }]);
                                    convertValue();
                                }} />
                        </div>
                        <span className="converter__update--time">
                            {fromCurrency} to {toCurrency} Dollar conversion — Last updated <span className="update__time--time">{time}</span>
                        </span>
                    </div>
                </div>
            </PageContentContainer>
        </MainPageWrapper>
    );
};
