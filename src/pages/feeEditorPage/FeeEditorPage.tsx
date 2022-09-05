import React, { useEffect, useRef, useState } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch} from "../../reducer/store";
import { deleteFeeFromList } from "../../reducer/currencyFeeReducer/currencyFeeReducer";
import "./FeeEditorPage.scss";
import PageHeader from "../../components/pageHeader/PageHeader";
import { PageContentContainer } from "../../components/pageContentContainer/PageContentContainer";
import ConversionFeesListContainer from "../../components/conversionFeesListContainer/ConversionFeesListContainer";
import ConvertionsFeesAdderContainer from "../../components/convertionsFeesAdderContainer/ConvertionsFeesAdderContainer";
import { MainPageWrapper } from "../../components/mainPageWrapper/MainPageWrapper";
import { SelectedCurrencyPair } from "../../modals/currencyFeeModal";
import { getAllCurrencyFromApi } from "../../reducer/API/currencyApiReducer";

export const FeeEditorPage = () => {
  const focusInput = useRef<HTMLInputElement | null>(null);
  const [buttonStatus, setButtonStatus] = useState(true);
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
    buttonDisableHandler();
    dispatch(getAllCurrencyFromApi())
  },)

  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, [selectedCurrencyPair]);

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

  const buttonDisableHandler = () => {
    if (selectedOption.length > 0) {
      setButtonStatus(false);
    }
  };

  return (
    <MainPageWrapper>
      <PageHeader
        title="XE Fee Editor"
        paragraph="Add, change or remove the fee for a given currency pair and direction" />

      <PageContentContainer>
        <ConvertionsFeesAdderContainer
          updateNewFeeHandler={(e) => { updateNewFee(e); }}
          updateFromCurrencyHandler={(e) => { updateFromCurrency(e); }}
          updateToCurrencyHandler={(e) => { updateToCurrency(e); }}
          selectedCurrencyPair={selectedCurrencyPair} />

        <ConversionFeesListContainer
          buttonStatus={buttonStatus}
          selectedOption={selectedOption}
          onChangeHandler={(e: string) => { showSelectedOption(e); }}
          onSubmitHandler={() => {
            dispatch(deleteFeeFromList(Number(selectedOption)));
            setSelectedOption("");
          }} />
      </PageContentContainer>
    </MainPageWrapper>
  );
};
