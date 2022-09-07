import React, { FC } from 'react'
import "./ConverterResult.scss";
import { EnteredValueDetails } from '../../pages/CurrencyConverterPage/CurrencyConverterPage';
import Button from '../Button/Button';

type ConverterResultProps = {
    toCurrency: string;
    fromCurrency: string;
    calculatedConvertFee: string;
    convertResult: string;
    lastUpdateTime: string | null;
    enteredValue: EnteredValueDetails[];
    enteredAmount: string;
    onClickHandler: () => void;
}

export const ConverterResult: FC<ConverterResultProps> = ({ toCurrency, onClickHandler, fromCurrency,
    calculatedConvertFee, convertResult, lastUpdateTime, enteredValue }) => {

    return (
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
                    onClick={onClickHandler} />
            </div>
            <span className="converter__update--time">
                {fromCurrency} to {toCurrency} Dollar conversion — Last updated <span className="update__time--time">{lastUpdateTime}</span>
            </span>
        </div>
    )
}
