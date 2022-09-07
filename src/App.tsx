import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage/CurrencyConverterPage';
import { FeeEditorPage } from './pages/FeeEditorPage/FeeEditorPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {

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
