/* eslint-disable jsx-a11y/alt-text */
import './header.css'
import logoCovid from '../../assets/logo-covid.png'

const Header = () => {
    return (
        <header>  
                <img src={logoCovid} alt="Logo Covid-19"/>
        </header>
    )
}

export default Header;