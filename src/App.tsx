import React, { useEffect } from 'react';
import axios from 'axios';
import parseXmlToJs from './xmlParser/xmlParser';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CurrencyConverterPage } from './pages/currencyConverterPage/CurrencyConverterPage';
import { FeeEditorPage } from './pages/feeEditorPage/FeeEditorPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {

  useEffect(() => {
    getAllCurr()
  })

  const getAllCurr = () => {
    axios.get("http://localhost:3000/api/stats/eurofxref/eurofxref-daily.xml")
      .then((response) => {
        const currency = response.data;
        parseXmlToJs(currency);
        // console.log(currency)
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<FeeEditorPage />} />
        <Route path="/editor" element={<FeeEditorPage />} />
        <Route path="/calculator" element={<CurrencyConverterPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
