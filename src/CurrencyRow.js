export default function CurrencyRow({ currencyOptions }) {
  return (

    <div>
      <input type="number" className="input" />

      <select>
        {currencyOptions.map((currency, i) =>
          <option value={currency} key={i}>{currency}</option>
        )}
      </select>
    </div >
  );
}
