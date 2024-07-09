import React from 'react'
import ReactDOM from 'react-dom/client'
import {BalanceTitle, DineroEuros} from './Balance.jsx'
import { CreateButton } from './Operations.jsx'
import { ShowHeader } from './Header.jsx'
import { ShowTransaction } from './Transactions.jsx'
import './index.css'

// Importar JSON
import accountsData from './accounts.json';

// Variable global para los datos de accounts.json
export const accounts = accountsData;

// Variable global con el usuario en uso
export const user="@relaxedrt";

//Declaramos la cuenta a 1 al recargar
var account = 1;
export var currentAccount = `${account}${user}`;

const Balance = ReactDOM.createRoot(document.getElementById('balance'))
const Header = ReactDOM.createRoot(document.getElementById('header'))
const Operations = ReactDOM.createRoot(document.getElementById('operations'))
const Transactions = ReactDOM.createRoot(document.getElementById('transactions'))

function SiguienteCuenta() {
  if (account < (Object.keys(accounts.users[user].accounts).length)) {
    account = account + 1;
  }else{
    account = 1;
  }
  console.log(account);
};

function AnteriorCuenta() {
  if (account != 1) {
    account = account - 1;
  }else{
    account = (Object.keys(accounts.users[user].accounts).length);
  }
  console.log(account);
};

Header.render(
  <ShowHeader />
)

Balance.render(
  <React.Fragment>
    <BalanceTitle />
    <DineroEuros />
    <table className='accountChange'>
      <tr>
        <td>
          <CreateButton text="<<==" onClick={AnteriorCuenta}/>
        </td>
        <td>
          <CreateButton text="==>>" onClick={SiguienteCuenta}/>
        </td>
      </tr>
    </table>
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
