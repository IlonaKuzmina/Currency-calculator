import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../reducer/store';
import { SelectedCurrencyPair } from '../../types/currencyFeeTypes';
import Button from '../Button/Button';
import { deleteFeeFromList } from '../../reducer/currencyFeeReducer/currencyFeeReducer';
import "./FeeListTable.scss";

const FeeListTable = () => {
    const currencyPairWithFee = useSelector(({ currencyFee }: RootState) => currencyFee);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <table className="fee__list--table">
                <tr className="fee__table--line">
                    <th className="fee__table--heading">No.</th>
                    <th className="fee__table--heading">From</th>
                    <th className="fee__table--heading">To</th>
                    <th className="fee__table--heading">Fee</th>
                    <th className="fee__table--heading" colSpan={2}></th>
                </tr>
                {currencyPairWithFee.currencyPairFeeInfo.map(
                    ({ toCurrency, fromCurrency, newFee }: SelectedCurrencyPair, index: number) => (
                        <tr key={index} className="fee__table--line">
                            <td className="fee__table--heading">{index + 1}.</td>
                            <td className="fee__table--content"> {fromCurrency}</td>
                            <td className="fee__table--content">{toCurrency}</td>
                            <td className="fee__table--content">{newFee}</td>
                            <td className="fee__table--btn">
                                <Button label="Delete"
                                    wrapperClass="delete__btn--wrapper"
                                    btnClass={"delete"}
                                    onClick={() => { dispatch(deleteFeeFromList(index)) }}>
                                </Button>
                            </td>
                            <td className="fee__table--btn">
                                <Button label="Edit"
                                    disabled
                                    wrapperClass="delete__btn--wrapper"
                                    btnClass={"delete"}>
                                </Button>
                            </td>
                        </tr>
                    )
                )}
            </table>
        </>
    )
}

export default FeeListTable;
