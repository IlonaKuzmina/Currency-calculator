import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/button/Button'
import CurrencySelect from '../../components/currencySelect/CurrencySelect'
import Label from '../../components/label/Label'
import { MainPageWrapper } from '../../components/mainPageWrapper/MainPageWrapper'
import { PageContentContainer } from '../../components/pageContentContainer/PageContentContainer'
import PageHeader from '../../components/pageHeader/PageHeader'
import SmallTitle from '../../components/smallTitle/SmallTitle'
import { RootState } from '../../reducer/store'
import './CurrencyConverterPage.scss'

export const CurrencyConverterPage = () => {
    const time = useSelector(({ currencyApi }: RootState) => currencyApi);
    const currencyName = useSelector(({ currencyApi }: RootState) => currencyApi);
    const currencyFeePair = useSelector(({ currencyFee }: RootState) => currencyFee);

useEffect(()=>{
    console.log(time.lastUpdateTime)
    console.log(time.currencyNameRate)})

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
                                <input className='currency__input' type="number" onChange={(e) => { }} />
                            </div>

                            <div>
                                <Label label="From" /> <br />
                                <CurrencySelect onChangeHandler={() => { }}></CurrencySelect>
                            </div>

                            <div>
                                <Label /> <br />
                                <Button btnClass="swaper" onClick={() => { }}>
                                    <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                                </Button>
                            </div>

                            <div>
                                <Label label="To" /> <br />
                                <CurrencySelect onChangeHandler={() => { }}></CurrencySelect>
                            </div>

                            <div>
                                <Label /> <br />
                                <Button label="Convert" btnClass="add" wrapperClass="add__btn--wrapper" onClick={() => { }} />
                            </div>
                        </div>
                    </form>
                    <div>
                        <p>Last update time: <span>{time.lastUpdateTime}</span></p>
                    </div>
                </div>

            </PageContentContainer>
        </MainPageWrapper>
    )
}
