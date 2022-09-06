import React, { FC, ReactNode } from 'react'
import './FeeListSelect.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { SelectedCurrencyPair } from '../../types/currencyFeeTypes';

type CurrencySelectProps = {
    onChangeHandler: (option: string) => void;
    children?: ReactNode;
}

const FeeListSelect: FC<CurrencySelectProps> = ({ onChangeHandler }) => {
    const currencyPairWithFee = useSelector(({ currencyFee }: RootState) => currencyFee);

    return (
        <>
            <select
                className="select__fee--list"
                onChange={(e) => onChangeHandler(e.target.value)}>
                <option disabled selected>Currency pair with exchange fee</option>
                {currencyPairWithFee.currencyPairFeeInfo.map(
                    ({ toCurrency, fromCurrency, newFee }: SelectedCurrencyPair, index: number) => (
                        <option value={index} key={index} className="option">
                            {fromCurrency} - {toCurrency}{' '}({(Number(newFee) * 100).toFixed()} %)
                        </option>
                    )
                )}
            </select>
        </>
    )
}

export default FeeListSelect;
