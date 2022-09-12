import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage/CurrencyConverterPage';
import { FeeEditorPage } from './pages/FeeEditorPage/FeeEditorPage';
import { Header } from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './reducer/store';
import { getAllCurrencyFromApi } from './reducer/currencyApiReducer/currencyApiReducer';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllCurrencyFromApi());
  }, [dispatch])

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<CurrencyConverterPage />} />
          <Route path="/calculator" element={<CurrencyConverterPage />} />
          <Route path="/editor" element={<FeeEditorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
