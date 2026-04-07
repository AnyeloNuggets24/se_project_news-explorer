import "./Footer.css";
import github from "../../assets/FfLogo/github.svg";
import linkedin from "../../assets/FfLogo/LinkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__right">
        <div className="footer__links">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__logos">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer__logo-link"
          >
            <img src={github} alt="GitHub" className="footer__logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer__logo-link"
          >
            <img src={linkedin} alt="LinkedIn" className="footer__logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
