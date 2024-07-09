import './Balance.css'
import { user, accounts, currentAccount} from './main'

export function BalanceTitle(){
  //Deberia crear una base de datos y recoger la variable desde ahi
  //De momento funcionare con hardcode
  var account = currentAccount;

  return(
    <article className='bank-Balance'>
      <header>
        <strong className='bank-Balance-title'>
          Balance
        </strong>
        <span className='bank-Balance-account'>
          Cuenta: {account}
        </span>
      </header> 
    </article>
  )
}

export function DineroEuros(){
  //Deberia crear una base de datos y recoger la variable desde ahi
  //De momento funcionare con hardcode
  var money = accounts.users[user].accounts[currentAccount];
  
  return(
    <article className='bank-Balance'>
      <header>
        <strong className='bank-Balance-num'>
          {money}
        </strong>
      </header>
      <aside>
        <span className='bank-Balance-divisa'>
          €
        </span>
      </aside>
    </article>
  )
}