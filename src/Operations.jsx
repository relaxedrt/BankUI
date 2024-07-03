import './Operations.css'

export function CreateButton({text}){
    return(
        <article className='bank-Operations'>
            <button className='bank-Operations-transfer'>{text}</button>
        </article>
        
    )
}