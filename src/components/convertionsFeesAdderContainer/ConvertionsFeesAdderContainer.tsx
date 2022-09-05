import React, { FC, useEffect, useRef } from 'react'
import { useDispatch} from 'react-redux';
import { addNewFeeToList } from '../../reducer/currencyFeeReducer/currencyFeeReducer';
import { AppDispatch} from '../../reducer/store';
import Button from '../button/Button';
import CurrencySelect from '../currencySelect/CurrencySelect';
import Label from '../label/Label';
import SmallTitle from '../smallTitle/SmallTitle';
import './ConvertionsFeesAdderContainer.scss';
import { SelectedCurrencyPair } from '../../modals/currencyFeeModal';

type ConvertionsFeesAdderContainerProps = {
    selectedCurrencyPair: SelectedCurrencyPair;
    updateNewFeeHandler: (e: string) => void;
    updateFromCurrencyHandler: (e: string) => void;
    updateToCurrencyHandler: (e: string) => void;
}

const ConvertionsFeesAdderContainer: FC<ConvertionsFeesAdderContainerProps> = ({ updateFromCurrencyHandler, 
    updateToCurrencyHandler, selectedCurrencyPair, updateNewFeeHandler }) => {
    const dispatch = useDispatch<AppDispatch>();
    const focusInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (focusInput.current) {
            focusInput.current.focus();
        }
    }, []);

    return (
        <div>
            <SmallTitle>Add new fee to currency pair</SmallTitle>
            <form onChange={() => { dispatch(addNewFeeToList(selectedCurrencyPair)); }}>
                <div className="editor__container">
                    <div>
                        <Label label="Amount" /> <br />
                        <input
                            className="editor__input"
                            type="number"
                            onChange={(e) => { updateNewFeeHandler(e.target.value); }}
                            ref={focusInput}
                            min="0"
                            max="0.9"
                            pattern="^\d*(\.\d{0,2})?$"
                            step="0.01"
                        />
                    </div>

                    <div>
                        <Label label="From" /> <br />
                        <CurrencySelect
                            onChangeHandler={(e) => { updateFromCurrencyHandler(e); }} />
                    </div>

                    <div>
                        <Label /> <br />
                        <Button btnClass="swaper" onClick={() => { }}>
                            <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                        </Button>
                    </div>

                    <div>
                        <Label label="To" /> <br />
                        <CurrencySelect
                            onChangeHandler={(e) => { updateToCurrencyHandler(e); }} />
                    </div>

                    <div>
                        <Label /> <br />
                        <Button label="Add" btnClass="add" wrapperClass="add__btn--wrapper" onClick={() => {
                            dispatch(addNewFeeToList(selectedCurrencyPair));
                        }} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ConvertionsFeesAdderContainer;
