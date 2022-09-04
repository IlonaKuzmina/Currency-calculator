import React, { FC, ReactNode } from 'react'
import './CurrencySelect.scss';
import { Currency } from "../../data/fakeDATA";

type CurrencySelectProps = {
    currency: Currency[];
    onChangeHandler: (option: string) => void;
    children?: ReactNode;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ currency, onChangeHandler, children }) => {
    return (
        <>
            <select
                className="select-currency"
                id="amount"
                onChange={(e) => {
                    onChangeHandler(e.target.value);
                }}
            >
                {children}
                {currency.map((cur) => (
                    <option value={cur.currency}>{cur.currency}</option>
                ))}
            </select>
        </>
    )
}

export default CurrencySelect;
