import React from 'react'
import ReactDOM from 'react-dom/client'
import {BalanceTitle, DineroEuros} from './Balance.jsx'
import { CreateButton } from './Operations.jsx'
import { ShowHeader } from './Header.jsx'
import { ShowTransaction } from './Transactions.jsx'
import './index.css'

const Balance = ReactDOM.createRoot(document.getElementById('balance'))
const Header = ReactDOM.createRoot(document.getElementById('header'))
const Operations = ReactDOM.createRoot(document.getElementById('operations'))
const Transactions = ReactDOM.createRoot(document.getElementById('transactions'))

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

Transactions.render(
  <React.Fragment>
    <ShowTransaction origin="bBjeXbAh7pQtn5sY" destination="VpwuBjjkgU66kXUK" quantity={1000} before={0} sr={true}/>
    <ShowTransaction origin="bBjeXbAh7pQtn5sY" destination="VpwuBjjkgU66kXUK" quantity={1000} before={1000} sr={false}/>
    <ShowTransaction origin="bBjeXbAh7pQtn5sY" destination="VpwuBjjkgU66kXUK" quantity={1000} before={2000} sr={false}/>
  </React.Fragment>
)
