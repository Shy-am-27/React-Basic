import { React, useId } from 'react'

function InputBox(
  {
    label,
    amount,
    onAmountChange,
    onCurrencychange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
  }
) {
  const id = useId() //To crate uniquie id
  return (
    <div className={` bg-white p-3 text-sm rounded-lg flex ${className}`}>
      <div className='w-1-2'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input
          id={id}
          type="number"
          className='outline-none w-full bg-transparent py-1.5'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //data type conversion from string to numbers

        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Change Currency</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency}
          onChange={(e) => { onCurrencychange && onCurrencychange(e.target.value) }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((Currency) => (
            <option value={Currency} key={Currency}>{Currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox