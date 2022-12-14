import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContentContainer } from "../../components/PageContentContainer/PageContentContainer";
import ConversionFeesListContainer from "../../components/ConversionFeesListContainer/ConversionFeesListContainer";
import ConvertionsFeesAdderContainer from "../../components/ConvertionsFeesAdderContainer/ConvertionsFeesAdderContainer";
import { MainPageWrapper } from "../../components/MainPageWrapper/MainPageWrapper";
import { SelectedCurrencyPair } from "../../types/currencyFeeTypes";

export const FeeEditorPage = () => {
  const focusInput = useRef<HTMLInputElement | null>(null);
  const [selectedCurrencyPair, setSelectedCurrencyPair] = useState<SelectedCurrencyPair>({
    fromCurrency: "",
    toCurrency: "",
    newFee: "",
    feePairBeingEdited: false,
  });

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
      newFee: fee
    });
  };

  return (
    <MainPageWrapper>
      <PageHeader
        title="XE Fee Editor"
        paragraph="Add, change or remove the fee for a given currency pair and direction" />
      <PageContentContainer>
        <ConvertionsFeesAdderContainer
          updateNewFeeHandler={updateNewFee}
          updateFromCurrencyHandler={updateFromCurrency}
          updateToCurrencyHandler={updateToCurrency}
          selectedCurrencyPair={selectedCurrencyPair} />
        <ConversionFeesListContainer />
      </PageContentContainer>
    </MainPageWrapper>
  );
};
