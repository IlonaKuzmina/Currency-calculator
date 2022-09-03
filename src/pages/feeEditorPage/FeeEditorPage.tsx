import React, { useEffect, useRef, useState } from 'react'
import "./FeeEditorPage.scss";
import { Currency, getCurrencyBloks } from '../../data/fakeDATA';

export const FeeEditorPage = () => {
  const [currency, setCurrency] = useState<Currency[]>([]);
  const focusInput = useRef<HTMLInputElement | null>(null);
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState({
    base: 'EUR',
    fromCurrency: '',
    toCurrency: '',
    newFeeAdded: '',
    defaultFee: true,
  })

  useEffect(() => {
    const item = getCurrencyBloks();
    setCurrency(item);
    console.log(selectedCurrencyPair)
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, [selectedCurrencyPair])

  const updateFromCurrency = (curr: any) => {
    setSelectedCurrencyPair({ ...selectedCurrencyPair, fromCurrency: curr });
  };

  const updateToCurrency = (curr: any) => {
    setSelectedCurrencyPair({ ...selectedCurrencyPair, toCurrency: curr });
  };

  const updateNewFee = (fee: string) => {
    setSelectedCurrencyPair({ ...selectedCurrencyPair, newFeeAdded: fee, defaultFee: false });
  }

  // const handleSwap = () => {

  // }

  return (
    <div className='page__container'>
      <div className='feeeditorpage__page--wrapper'>
        <div className='fee__heading--container'>
          <h1 className='feeeditorpage__title'>XE Fee Editor</h1>
        </div>

        <div className='editor__wrapper'>
          <div>
            <h3>Add new fee to currency pair</h3>
            <form action=""
              onSubmit={(e) => {e.preventDefault();}}>
              <div className='editor__container'>
                <div>
                  <label className="label" htmlFor="input">Amount</label><br />
                  <input
                    className='editor__input'
                    type="number"
                    onChange={(e) => { updateNewFee(e.target.value); }}
                    ref={focusInput} />
                </div>

                <div>
                  <label className="label" htmlFor="amount">From</label> <br />
                  <select className='editor__select' id="amount" onChange={(e) => { updateFromCurrency(e.target.value) }}>
                    {currency.map((cur) => <option value={cur.currency}>{cur.currency}</option>)}
                  </select>
                </div>

                <div>
                  <label className="label" htmlFor="amount"></label> <br />
                  <button className='currency__swaper' onClick={() => { }}>
                    <img className='swaper__image' src='/assets/logo/swap.png' alt='swap'></img>
                  </button>
                </div>

                <div>
                  <label className="label" htmlFor="amount"> To </label> <br />
                  <select className='editor__select' id="amount" onChange={(e) => { updateToCurrency(e.target.value) }}>
                    {currency.map((cur) => <option value={cur.currency}>{cur.currency}</option>)}
                  </select>
                </div>

                <div >
                  <label className="label" htmlFor="amount"></label> <br />
                  <div className='add__btn--wrapper'><button className='add__button' onClick={() => { }}>Add</button></div>
                </div>
              </div>
            </form>

          </div>

          <div>
            <h3>Added currency pair fee</h3>
            <div>
              <select className="editor__select" name="" id="" >
                <option>Currency pair with exchange fee</option>
                <option><span>{selectedCurrencyPair.newFeeAdded}</span><span>{selectedCurrencyPair.fromCurrency}-{selectedCurrencyPair.toCurrency}</span></option>
              </select>
            </div>
          </div>
        </div>
      </div >
    </div>

  )
}
