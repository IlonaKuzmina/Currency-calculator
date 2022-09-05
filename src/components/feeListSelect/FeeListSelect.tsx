import React, { FC, ReactNode } from 'react'
import './FeeListSelect.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { SelectedCurrencyPair } from '../../modals/currencyFeeModal';

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
                onChange={(e) => onChangeHandler(e.target.value)}
            >
                <option defaultChecked>Currency pair with exchange fee</option>
                {currencyPairWithFee.currencyPairFeeInfo.map(
                    ({ toCurrency, fromCurrency, newFee }: SelectedCurrencyPair, index: number) => (
                        <option value={index} key={index}>
                            <span>{index + 1}.</span>
                            <span>
                                <b>{Number(newFee) * 100}%</b>
                            </span>
                            <span>{fromCurrency}</span> - <span>{toCurrency}</span>
                        </option>
                    )
                )}
            </select>
        </>
    )
}

export default FeeListSelect;
