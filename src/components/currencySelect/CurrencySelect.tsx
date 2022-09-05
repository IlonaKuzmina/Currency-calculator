import React, { FC, ReactNode, useEffect } from 'react'
import './CurrencySelect.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { CubeCurrencyResult } from '../../types/apiResultTypes';

type CurrencySelectProps = {
    firstFromValue?: string;
    firstToValue?: string;
    onChangeHandler: (option: string) => void;
    children?: ReactNode;
    selectType: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ firstFromValue, firstToValue, selectType, onChangeHandler, children }) => {
    const currencyName = useSelector(({ currencyApi }: RootState) => currencyApi);

    useEffect(() => { })

    return (
        <>
            <select
                className="select-currency"
                id="amount"
                onChange={(e) => {
                    onChangeHandler(e.target.value);
                }}>
                <option>currency</option>
                <option value={firstToValue}>{firstToValue}</option>
                <option value={firstFromValue}>{firstFromValue}</option>
                {currencyName.currencyNameRate?.map((cur: CubeCurrencyResult) => (
                    <option key={cur['@_currency']} value={cur['@_currency']}>{cur['@_currency']}</option>))}
            </select>
        </>
    )
}

export default CurrencySelect;
