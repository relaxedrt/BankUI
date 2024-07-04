import './Header.css'
import { user } from './main'

export function ShowHeader() {
    var username = user
    //Deberia crear una base de datos y recoger la variable desde ahi
    //De momento funcionare con hardcode
    return (
        <article className='bank-Header'>
            <button className='bank-Header-name'>
                <img className='bank-Header-logo' alt='Logo TexBank' src='/icon.svg' />
                TexBank
            </button>
            <button className='bank-Header-user'>
                {`${username}`}
                <img className='bank-Header-user-photo' alt='Foto de usuario' src={`https://unavatar.io/${username}`} />
            </button>
        </article>
    )
}