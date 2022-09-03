import React from 'react'
import './CurrencyConverterPage.scss'

export const CurrencyConverterPage = () => {
    return (
        <div className="page__container">
            <div className='currencyconverter__page--wrapper'>
                <div className='currency__heading--container'>
                    <h1 className='currencyconverterpage__title'>XE Currency Converter</h1>
                    <p className='currencyconverterpage__paragraph'>Check live foreign currency exchange rates</p>
                </div>

                <div className='currency__wrapper'>
                    <div className="currency__container">
                        <div>
                            <label className="label" htmlFor="input">Amount</label><br />
                            <input className='currency__input' type="number" onChange={(e) => { }} />
                        </div>

                        <div>
                            <label htmlFor="amount">From </label> <br />
                            <select className='currency__select' id="amount" onChange={(e) => { }}>
                                <option value={''}>{''}</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="amount"></label> <br />
                            <button className='currency__swaper' onClick={() => { }}>
                                <img className='swaper__image' src='/assets/logo/swap.png' alt='swap'></img>
                            </button>
                        </div>

                        <div>
                            <label htmlFor="amount"> To</label><br />
                            <select className='currency__select' id="amount" onChange={(e) => { }}>
                                <option value={''}>{''}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
