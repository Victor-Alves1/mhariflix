import logo from './imagens/MHARIFLIX.png'
import './index.css'


const Header = () => {
    return (
        <header>
            <a href="/"><img src={logo} alt="Logo do site" /></a>
        </header>
    );
}
 
export default Header;