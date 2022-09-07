import React, { FC } from 'react'
import Button from '../Button/Button';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import Label from '../Label/Label';
import './CurrencyConverterForm.scss';

type CurrencyConverterFormProps = {
    updateFromCurrencyHandler: (option: string) => void;
    updateToCurrencyHandler: (option: string) => void;
    enteredAmountHandler: (amount: string) => void;
}

export const CurrencyConverterForm: FC<CurrencyConverterFormProps> = ({ enteredAmountHandler, updateFromCurrencyHandler, updateToCurrencyHandler }) => {
    return (
        <form>
            <div className="currency__container">
                <div>
                    <Label label="Amount" /> <br />
                    <input
                        className="currency__input"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        onChange={(amount) => enteredAmountHandler(amount.target.value)} />
                </div>

                <div>
                    <Label label="From" /> <br />
                    <CurrencySelect
                        selectType={true}
                        onChangeHandler={updateFromCurrencyHandler}></CurrencySelect>
                </div>

                {/* <div>
                    <Label /> <br />
                    <Button btnClass="swaper">
                        <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                    </Button>
                </div> */}

                <div>
                    <Label label="To" /> <br />
                    <CurrencySelect
                        selectType={false}
                        onChangeHandler={updateToCurrencyHandler}
                    ></CurrencySelect>
                </div>
            </div>
        </form>
    )
}
