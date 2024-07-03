import './Balance.css'

export function BalanceTitle(){
  //Deberia crear una base de datos y recoger la variable desde ahi
  //De momento funcionare con hardcode
  var account = "bBjeXbAh7pQtn5sY";

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
  var money = 1000;

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

export function DineroDolares(){
  //Deberia crear una base de datos y recoger la variable desde ahi
  //De momento funcionare con hardcode
  var money = 1000;

  return(
    <article className='bank-Balance'>
      <header>
        <strong className='bank-Balance-num'>
          {money*0.92}
        </strong>
      </header>
      <aside>
        <span className='bank-Balance-divisa'>
          $
        </span>
      </aside>
    </article>
  )
}