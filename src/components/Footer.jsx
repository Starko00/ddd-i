import FooterStyle from "./FooterStyle.module.css";
import documentImg from "./../assets/codeDocument.png";
import twitter from './../assets/twitter.png'
import linkedin from './../assets/linkedin.png'
import github from './../assets/github.png'
import logo from './../assets/logo-White.svg'
export const Footer = () => {
  const style = FooterStyle;
  return (
    <div className={style.footerContainer}>
      <div className={style.upper}>
        <div className={style.textHolder}>
          <h1>Compliance made easy</h1>
          <h2>Ready to get started?</h2>
          <p>
            Feel free to test and develop for free. Pay when you are ready to
            deploy.
          </p>
          <div className={style.buttonHolder}>
            <button className="buttonOrange">Start for free</button>
            <button className="buttonOrange">Contact us</button>
          </div>
        </div>
        <div className={style.rightHolder}>
          <img src={documentImg} alt="" />
          <div>
            <p>Get up and running with DDDi in as little as 3 minutes.</p>
            <p>API documentation</p>
          </div>
        </div>
      </div>
      <div className={style.down}>
        <div className={style.logoHolder}>
        <img src={logo} alt="Logo" />
        </div>
        <div className={style.listHolder}>
          <ul>
            <li>Solutions</li>
            <li>Transformation</li>
            <li>Integration</li>
            <li>Custom</li>
            <li>Build</li>
          </ul>

          <ul>
            <li>DDDinvoices</li>
            <li>API documentation</li>
            <li>Company</li>
            <li>Values</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Solutions</li>
            <li>API documentation</li>
            <li>Company</li>
            <li>Values</li>
            <li>Build</li>
          </ul>
          <ul>
            <li>Legal</li>
            <li>Terms</li>                      
          </ul>
          <ul>
            <li>Get in touch</li>
            <li>Contact</li>  
            <li><img src={twitter} alt="twitter" /> <img src={linkedin} alt="linkedin" /> <img src={github} alt="github" /></li>                    
          </ul>
        </div>
      </div>
    </div>
  );
};
