import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button/Button'
import CurrencySelect from '../../components/CurrencySelect/CurrencySelect'
import Label from '../../components/Label/Label'
import { MainPageWrapper } from '../../components/MainPageWrapper/MainPageWrapper'
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer'
import PageHeader from '../../components/PageHeader/PageHeader'
import SmallTitle from '../../components/SmallTitle/SmallTitle'
import { RootState } from '../../reducer/store'
import './CurrencyConverterPage.scss'

export const CurrencyConverterPage = () => {
    const time = useSelector(({ currencyApi }: RootState) => currencyApi);
    const currencyName = useSelector(({ currencyApi }: RootState) => currencyApi);
    const currencyFeePair = useSelector(({ currencyFee }: RootState) => currencyFee);
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [toCurrency, setToCurrency] = useState('');
    const [fromCurrency, setFromCurrency] = useState('');
    const [firstFromValue, setFirstFromValue] = useState('EUR');
    const [firstToValue, setFirstToValue] = useState('USD');

    useEffect(() => { })

    const updateFromCurrency = (option: string) => {
        setFromCurrency(option)
    }

    const updatetoCurrency = (option: string) => {
        setToCurrency(option)
    }

    const findToCurrencyRate = () => {

    }

    return (
        <MainPageWrapper>
            <PageHeader
                title='XE Currency Converter'
                paragraph='Check live foreign currency exchange rates' />
            <PageContentContainer>
                <div>
                    <SmallTitle> Add new fee to currency pair</SmallTitle>
                    <form onChange={() => { }}>
                        <div className="currency__container">
                            <div>
                                <Label label="Amount" /> <br />
                                <input className='currency__input' type="number" onChange={(e) => { setEnteredAmount(Number(e.target.value)) }} />
                            </div>

                            <div>
                                <Label label="From" /> <br />
                                <CurrencySelect
                                    selectType={true}
                                    firstFromValue={firstFromValue}
                                    firstToValue={firstToValue}
                                    onChangeHandler={(value) => { updateFromCurrency(value) }}></CurrencySelect>
                            </div>

                            <div>
                                <Label /> <br />
                                <Button btnClass="swaper">
                                    <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                                </Button>
                            </div>

                            <div>
                                <Label label="To" /> <br />
                                <CurrencySelect
                                    selectType={false}
                                    firstFromValue={firstFromValue}
                                    firstToValue={firstToValue}
                                    onChangeHandler={(value) => { updatetoCurrency(value) }}></CurrencySelect>
                            </div>

                            <div>
                                <Label /> <br />
                                <Button label="Convert" btnClass="add" wrapperClass="add__btn--wrapper" />
                            </div>
                        </div>
                    </form>
                    <div>
                        <p>Last update time: <span>{time.lastUpdateTime}</span></p>
                    </div>

                    <div>
                        {/* {(enteredAmount - enteredAmount*currencyFeePair.baseFeeRate)*selectedToCuurency.rate} */}
                        {/* (amount - amount * fee) * rate */}
                        <span>{fromCurrency}+{toCurrency}</span>
                    </div>

                </div>

            </PageContentContainer>
        </MainPageWrapper>
    )
}
