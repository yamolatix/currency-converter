export default function CurrencyRow({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) {
  return (

    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />

      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((currency, i) =>
          <option value={currency} key={i}>{currency}</option>
        )}
      </select>
    </div >
  );
}
