import React, { FC, ReactNode, useEffect, useState } from 'react'
import './CurrencySelect.scss';
import { CubeCurrencyResult } from '../../types/apiResultTypes';

type CurrencySelectProps = {
    onChangeHandler: (option: string) => void;
    children?: ReactNode;
    selectType: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ onChangeHandler }) => {
    const [currencyName, setCurrencyName] = useState<CubeCurrencyResult[]>([]);

    useEffect(() => {
        setCurrencyName(JSON.parse(localStorage.getItem("currencyNameRate") || "[]") as CubeCurrencyResult[])
    }, [])

    return (
        <>
            <select
                className="select-currency"
                id="amount"
                onChange={(e) => {
                    onChangeHandler(e.target.value);
                }}>
                <option defaultChecked value="">Select currency</option>
                <option value={'EUR'}>EUR</option>
                {currencyName?.map((cur: CubeCurrencyResult) => (
                    <option key={cur["@_"]['@_currency']} value={cur["@_"]['@_currency']}>{cur["@_"]['@_currency']}</option>))}
            </select>
        </>
    )
}

export default CurrencySelect;
