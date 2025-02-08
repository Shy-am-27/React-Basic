
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

const reactElement ={
    tags: 'a',
    props: {
        href:'www.google.com',
        target:  '_blank'
    },
    child:' Click me'
}
function Shyam(){
    return(
        <h1>HELLO</h1>
    )  
}
const test = (
    <h1>Hi</h1>
)
const areactElement = React.createElement(
    'a',
    {href:'www.//google.com',target:'_blank'},
    'click ME'
)

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
