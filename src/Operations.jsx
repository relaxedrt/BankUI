import './Operations.css'

export function CreateButton({text, onClick}){
    return(
        <article className='bank-Operations'>
            <button className='bank-Operations-transfer' onClick={onClick}>{text}</button>
        </article>
        
    )
}