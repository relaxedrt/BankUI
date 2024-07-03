import React from 'react'
import ReactDOM from 'react-dom/client'
import {BalanceTitle, DineroEuros, DineroDolares} from './Balance.jsx'
import { CreateButton } from './Operations.jsx'
import { ShowHeader } from './Header.jsx'
import './index.css'

const Balance = ReactDOM.createRoot(document.getElementById('balance'))
const Header = ReactDOM.createRoot(document.getElementById('header'))
const Operations = ReactDOM.createRoot(document.getElementById('operations'))

Header.render(
  <ShowHeader />
)

Balance.render(
  <React.Fragment>
    <BalanceTitle />
    <DineroEuros />
  </React.Fragment>
)

Operations.render(
  <React.Fragment>
    <table>
      <tr>
        <td><CreateButton text="Bizum"/></td>
        <td><CreateButton text="Transferencia"/></td>
        <td><CreateButton text="Ingreso"/></td>
      </tr>
    </table>
  </React.Fragment>
)
