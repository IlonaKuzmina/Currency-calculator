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
                            {fromCurrency} - {toCurrency}{' '}{newFee}
                        </option>
                    )
                )}
            </select>

            {/* <div>
                <table>
                    <th>List of currency conversion fees</th>
                    {currencyPairWithFee.currencyPairFeeInfo.map(
                        ({ toCurrency, fromCurrency, newFee }: SelectedCurrencyPair, index: number) => (
                            <tr value={index} key={index} className="option">
                                <td>{fromCurrency}</td><td>{toCurrency}</td><td>{newFee}</td><td></td>
                            </tr>
                        )
                    )}
                </table>
            </div> */}

        </>
    )
}

export default FeeListSelect;
