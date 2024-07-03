import './Transactions.css'

export function ShowTransaction({origin, destination, quantity, before, sr}) {
    if (sr == true){    //sr sera true si se recibe el dinero y false si se envia
        return (
            <article className='bank-Transaction'>
                <strong className='bank-Transaction-quantity'>
                    +{quantity}€ 
                    <span className='bank-Transaction-calc'>
                        {before}→{before+quantity}€
                    </span>
                </strong>
                <span className='bank-Transaction-origin'>
                    Origen: {origin}
                </span>
                <span className='bank-Transaction-destination'>
                    Destino: {destination}
                </span>
            </article>
        )
    }else{
        return (
            <article className='bank-Transaction'>
                <strong className='bank-Transaction-quantity'>
                    -{quantity}€
                    <span className='bank-Transaction-calc'>
                        {before}→{before-quantity}€
                    </span>
                </strong>
                <span className='bank-Transaction-origin'>
                    Origen: {origin}
                </span>
                <span className='bank-Transaction-destination'>
                    Destino: {destination}
                </span>
            </article>
        )
    }
    
}