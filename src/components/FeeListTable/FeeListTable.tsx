import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../reducer/store';
import { SelectedCurrencyPair } from '../../types/currencyFeeTypes';
import Button from '../Button/Button';
import { deleteFeeFromList, editFeeFromList } from '../../reducer/currencyFeeReducer/currencyFeeReducer';
import "./FeeListTable.scss";

const FeeListTable = () => {
    const currencyPairWithFee = useSelector(({ currencyFee }: RootState) => currencyFee);
    const dispatch = useDispatch<AppDispatch>();
    const [editFee, setEditFee] = useState(false);

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
                            {editFee ? (
                                <td className="fee__table--content">
                                    <input
                                        className="fee__table--input"
                                        min="0.01"
                                        max="0.99"
                                        pattern="^\d*(\.\d{0,2})?$"
                                        step="0.01"
                                        placeholder={newFee}
                                        onChange={(e) => { dispatch(editFeeFromList(e.target.value)); }}
                                    />
                                </td>
                            ) : (
                                <td className="fee__table--content">{newFee}</td>
                            )}
                            <td className="fee__table--btn">
                                <Button label="Delete"
                                    wrapperClass="delete__btn--wrapper"
                                    btnClass={"delete"}
                                    onClick={() => { dispatch(deleteFeeFromList(index)) }}>
                                </Button>
                            </td>
                            <td className="fee__table--btn">
                                {editFee ? (
                                    <Button
                                        label="Save"
                                        wrapperClass="save__btn--wrapper"
                                        btnClass="delete"
                                        onClick={() => { setEditFee(false) }}>
                                    </Button>
                                ) : (
                                    <Button
                                        label="Edit"
                                        wrapperClass="delete__btn--wrapper"
                                        btnClass="delete"
                                        onClick={() => { setEditFee(true) }}>
                                    </Button>
                                )}
                            </td>
                        </tr>
                    )
                )}
            </table>
        </>
    )
}

export default FeeListTable;
