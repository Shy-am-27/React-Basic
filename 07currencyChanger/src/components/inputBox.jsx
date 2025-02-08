import React from 'react'

function inputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencychange,
        currencyItems = [],
        selectedCurrency = "usd",
        amountDisabled = false,
        currencyDisabled =false,
        className =""
    }
) {
  return (
    <div className='{className}'>
      <div className='w-1-2'>
        <label>{label}</label>
        <input 
        type="text"
        placeholder='Amount'
        disabled={amountDisabled} 
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        name="" 
        id="" />
      </div>
      <div className=''>
        <p className=''>Change Currency</p>
        <select
        className=''
        value={selectedCurrency}
        onChange={(e) => {onCurrencychange && onCurrencychange(e.target,value)}}
        disabled={currencyDisabled}
        >
          {currencyItems.map((Currency) => (
            <option value={Currency} key={Currency}>{Currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default inputBox