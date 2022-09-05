import React, { FC, ReactNode, useEffect } from 'react'
import './CurrencySelect.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { CubeCurrencyResult } from '../../modals/apiResultModal';

type CurrencySelectProps = {
    onChangeHandler: (option: string) => void;
    children?: ReactNode;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ onChangeHandler, children }) => {
    const currencyName = useSelector(({ currencyApi }: RootState) => currencyApi);

    useEffect(()=>{})

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
                {currencyName.currencyNameRate && currencyName.currencyNameRate.map((cur: CubeCurrencyResult) => (
                    <option key={cur['@_currency']} value={cur['@_currency']}>{cur['@_currency']}</option>))}
            </select>
        </>
    )
}

export default CurrencySelect;
