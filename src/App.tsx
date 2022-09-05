import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CurrencyConverterPage } from './pages/currencyConverterPage/CurrencyConverterPage';
import { FeeEditorPage } from './pages/feeEditorPage/FeeEditorPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {

  useEffect(() => { })

  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FeeEditorPage />} />
          <Route path="/editor" element={<FeeEditorPage />} />
          <Route path="/calculator" element={<CurrencyConverterPage />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </Provider>
  );
}

export default App;
