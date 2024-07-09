import './Balance.css'

export function BalanceTitle({account}){

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

export function DineroEuros({money}){
  
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