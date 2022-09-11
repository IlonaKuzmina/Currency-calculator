import React, { FC } from 'react'
import SmallTitle from '../SmallTitle/SmallTitle';
import { SelectedCurrencyPair } from '../../types/currencyFeeTypes';
import { FeeEditorForm } from '../FeeEditorForm/FeeEditorForm';

type ConvertionsFeesAdderContainerProps = {
    selectedCurrencyPair: SelectedCurrencyPair;
    updateNewFeeHandler: (value: string) => void;
    updateFromCurrencyHandler: (value: string) => void;
    updateToCurrencyHandler: (value: string) => void;
}

const ConvertionsFeesAdderContainer: FC<ConvertionsFeesAdderContainerProps> = ({ updateFromCurrencyHandler,
    updateToCurrencyHandler, selectedCurrencyPair, updateNewFeeHandler }) => {

    return (
        <>
            <SmallTitle>Add new fee to currency pair</SmallTitle>
            <FeeEditorForm
                updateNewFeeHandler={updateNewFeeHandler}
                updateFromCurrencyHandler={updateFromCurrencyHandler}
                updateToCurrencyHandler={updateToCurrencyHandler}
                selectedCurrencyPair={selectedCurrencyPair} />
        </>
    )
}

export default ConvertionsFeesAdderContainer;
