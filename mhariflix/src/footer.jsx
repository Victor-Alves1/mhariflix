const Footer = () => {
    return (
        <footer>
            <h2>Dúvidas? Ligue XXXX-XXX-XXXX</h2>
            <div className="footer-flex">
             <span>Perguntas frequentes</span>
             <span>Centro de ajuda</span>
             <span>Termo de uso</span>   
             <span>Privacidade</span>
             <span>Preferência de cookies</span>
             <span>Informações corporativas</span>
            </div>
            <select name="language" id="language">
                <option value="pt-br">
                    Português
                </option>
                <option value="en">English</option>
            </select>
        </footer>
    );
}
 
export default Footer;