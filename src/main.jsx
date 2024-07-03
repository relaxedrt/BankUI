import React from 'react'
import ReactDOM from 'react-dom/client'
import {BalanceTitle, DineroEuros, DineroDolares} from './Balance.jsx'
import { TransferButton } from './Operations.jsx'
import { ShowHeader } from './Header.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const Header = ReactDOM.createRoot(document.getElementById('header'))

Header.render(
  <ShowHeader />
)

root.render(
  <React.Fragment>
    <BalanceTitle />
    <DineroEuros />
    <TransferButton />
  </React.Fragment>
)