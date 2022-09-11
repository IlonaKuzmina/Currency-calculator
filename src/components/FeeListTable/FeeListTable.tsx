import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../reducer/store';
import { SelectedCurrencyPair } from '../../types/currencyFeeTypes';
import Button from '../Button/Button';
import { deleteFeeFromList, editFeeFromList, saveFeeFromList } from '../../reducer/currencyFeeReducer/currencyFeeReducer';
import "./FeeListTable.scss";

type EditedFeeProps = {
    index: number | null,
    newEditedFee: string,
}

const FeeListTable = () => {
    const currencyPairWithFee = useSelector(({ currencyFee }: RootState) => currencyFee);
    const dispatch = useDispatch<AppDispatch>();
    const [newEditedPair, setNewEditedPair] = useState<EditedFeeProps>({
        index: null,
        newEditedFee: "",
    });

    const sd = () => {
        console.log(newEditedPair)
    }

    return (
        <>
            <table className="fee__list--table">
                <thead>
                    <tr className="fee__table--line">
                        <th className="fee__table--heading">No.</th>
                        <th className="fee__table--heading">From</th>
                        <th className="fee__table--heading">To</th>
                        <th className="fee__table--heading">Fee</th>
                        <th className="fee__table--heading" colSpan={2}></th>
                    </tr>
                </thead>

                {currencyPairWithFee.currencyPairFeeInfo.map(
                    ({ toCurrency, fromCurrency, newFee, feePairBeingEdited }: SelectedCurrencyPair, index: number) => (
                        <tbody key={index}>
                            <tr className="fee__table--line">
                                <td className="fee__table--heading">{index + 1}.</td>
                                <td className="fee__table--content"> {fromCurrency}</td>
                                <td className="fee__table--content">{toCurrency}</td>
                                {feePairBeingEdited ? (
                                    <>
                                        <td className="fee__table--content">
                                            <input
                                                className="fee__table--input"
                                                min="0.01"
                                                max="0.99"
                                                pattern="^\d*(\.\d{0,2})?$"
                                                step="0.01"
                                                placeholder={newFee}
                                                onChange={(e) => { setNewEditedPair({ newEditedFee: e.target.value, index: index }) }}
                                            />
                                        </td>
                                        <td className="fee__table--btn">
                                            <Button label="Delete"
                                                wrapperClass="delete__btn--wrapper"
                                                btnClass={"delete"}
                                                onClick={() => { dispatch(deleteFeeFromList(index)); }}>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                label="Save"
                                                wrapperClass="save__btn--wrapper"
                                                btnClass="delete"
                                                onClick={() => { dispatch(saveFeeFromList(newEditedPair)); sd(); console.log(newEditedPair) }}>
                                            </Button>
                                        </td>
                                    </>

                                ) : (
                                    <>
                                        <td className="fee__table--content">{newFee}</td>
                                        <td className="fee__table--btn">
                                            <Button label="Delete"
                                                wrapperClass="delete__btn--wrapper"
                                                btnClass={"delete"}
                                                onClick={() => { dispatch(deleteFeeFromList(index)); }}>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                label="Edit"
                                                wrapperClass="delete__btn--wrapper"
                                                btnClass="delete"
                                                onClick={() => { dispatch(editFeeFromList(index)); console.log(index) }}>
                                            </Button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        </tbody>
                    )
                )}
            </table>
        </>
    )
}

export default FeeListTable;
