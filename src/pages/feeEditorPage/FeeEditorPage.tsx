import React, { useEffect, useRef, useState } from "react";
import "./FeeEditorPage.scss";
import { Currency, getCurrencyBloks } from "../../data/fakeDATA";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reducer/store";
import { addNewFeeToList, deleteFeeFromList } from "../../reducer/currencyReducer/currencyReducer";

type SelectedCurrencyPair = {
  base: string;
  fromCurrency: string;
  toCurrency: string;
  newFee: string;
  defaultFee: boolean;
};

export const FeeEditorPage = () => {
  const [currency, setCurrency] = useState<Currency[]>([]);
  const focusInput = useRef<HTMLInputElement | null>(null);
  const currencyPairWithFee = useSelector((state: RootState) => state.currency.currencyPairFeeInfo);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState<SelectedCurrencyPair>({
    base: "EUR",
    fromCurrency: "",
    toCurrency: "",
    newFee: "",
    defaultFee: true,
  });

  useEffect(() => {
    const item = getCurrencyBloks();
    setCurrency(item);
    console.log(selectedCurrencyPair);
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, [selectedCurrencyPair, currencyPairWithFee, selectedOption]);

  const updateFromCurrency = (curr: any) => {
    setSelectedCurrencyPair({ ...selectedCurrencyPair, fromCurrency: curr });
  };

  const updateToCurrency = (curr: any) => {
    setSelectedCurrencyPair({ ...selectedCurrencyPair, toCurrency: curr });
  };

  const updateNewFee = (fee: string) => {
    setSelectedCurrencyPair({
      ...selectedCurrencyPair,
      newFee: fee,
      defaultFee: false,
    });
  };

  const showSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="page__container">
      <div className="feeeditorpage__page--wrapper">
        <div className="fee__heading--container">
          <h1 className="feeeditorpage__title">XE Fee Editor</h1>
          <p className="feeeditorpage__paragraph">
            Add, change or remove the fee for a given currency pair and direction
          </p>
        </div>

        <div className="editor__wrapper">
          <div>
            <h2 className="editor--title">Add new fee to currency pair</h2>
            <form
              action=""
              onSubmit={() => {
                dispatch(addNewFeeToList(selectedCurrencyPair));
              }}
            >
              <div className="editor__container">
                <div>
                  <label className="label" htmlFor="input">
                    Amount
                  </label>
                  <br />
                  <input
                    className="editor__input"
                    type="number"
                    onChange={(e) => {
                      updateNewFee(e.target.value);
                    }}
                    ref={focusInput}
                    max="0.9"
                    pattern="^\d*(\.\d{0,2})?$"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="label" htmlFor="amount">
                    From
                  </label>{" "}
                  <br />
                  <select
                    className="editor__select"
                    id="amount"
                    onChange={(e) => {
                      updateFromCurrency(e.target.value);
                    }}
                  >
                    {currency.map((cur) => (
                      <option value={cur.currency}>{cur.currency}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label" htmlFor="amount"></label> <br />
                  <button className="currency__swaper" onClick={() => { }}>
                    <img className="swaper__image" src="/assets/logo/swap.png" alt="swap"></img>
                  </button>
                </div>

                <div>
                  <label className="label" htmlFor="amount">
                    {" "}
                    To{" "}
                  </label>{" "}
                  <br />
                  <select
                    className="editor__select"
                    id="amount"
                    onChange={(e) => {
                      updateToCurrency(e.target.value);
                    }}
                  >
                    {currency.map((cur) => (
                      <option value={cur.currency}>{cur.currency}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label" htmlFor="amount"></label> <br />
                  <div className="add__btn--wrapper">
                    <button className="add__button" onClick={() => { }}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h2 className="editor--title">List of currency conversion fees</h2>
            <div className="fee__list--container">
              <select
                className="editor__select"
                name=""
                id=""
                onChange={(e) => {
                  showSelectedOption(e.target.value);
                }}
              >
                <option defaultChecked>Currency pair with exchange fee</option>
                {currencyPairWithFee.map(
                  ({ toCurrency, fromCurrency, newFee }: SelectedCurrencyPair, index: number) => (
                    <option value={index} key={index}>
                      <div>
                        <span>{index + 1}.</span>
                        <span>
                          <b>{Number(newFee) * 100}%</b>
                        </span>
                        <span>{fromCurrency}</span> - <span>{toCurrency}</span>
                      </div>
                    </option>
                  )
                )}
              </select>

              <div className="delete__fee--container">
                <form className="delete__fee--container">
                  <div className="delete__btn--wrapper">
                    <button
                      className="delete__button"
                      type="submit"
                      disabled={selectedOption.length === 0}
                      onClick={() => {
                        dispatch(deleteFeeFromList(Number(selectedOption)));
                        setSelectedOption("");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
