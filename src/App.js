import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "https://api.exchangerate.host/latest"

export default function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setCurrencyOptions(Object.keys(data.rates)))
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions} />


      
      <div className='equals'>=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  );
}
