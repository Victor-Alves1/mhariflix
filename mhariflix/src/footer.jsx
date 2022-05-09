const Footer = () => {
    return (
        <footer>
            
            <div className="footer-flex">
             <h2>Questions? Ligue XXXX-XXX-XXXX</h2>
             <span>FAQ</span>
             <span>Help Center</span>
             <span>Terms of Use</span>   
             <span>Privacy</span>
             <span>Cookie Preferences</span>
             <span>Corporative Infomation</span>
            </div>
            <select name="language" id="language">
                <option value="en">
                    English
                </option>
                <option value="pt-br" disabled>
                    Português
                </option>
            </select>
        </footer>
    );
}
 
export default Footer;