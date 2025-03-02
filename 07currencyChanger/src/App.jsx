import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [converted, setConverted] = useState(0)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConverted(0)
    setAmount(0)

  }


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConverted(amount * currencyInfo[to]) //for multiplication
  }
  return (
    <>
      <div className='w-full h-screen flex  flexwrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg)' }}>

        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                  label="from"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencychange={(currency) => setFrom(currency)}
                  currencyOptions={options}
                  selectedCurrency={from}

                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  onClick={swap}
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                >swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                  label="to"
                  amount={converted}
                  amountDisabled
                  onCurrencychange={(currency) => setTo(currency)}
                  currencyOptions={options}
                  selectedCurrency={to}

                />
              </div>
              <button type='submit'
                className='w-full bg-blue-600 text-white rounded-lg py-3 px-4'>
                CONVERT {from.toUpperCase()} to {to.toUpperCase()}</button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
