import FooterStyle from "./FooterStyle.module.css";
import documentImg from "./../assets/codeDocument.png";
import twitter from './../assets/twitter.png'
import linkedin from './../assets/linkedin.png'
import { InlineWidget } from "react-calendly";
import github from './../assets/github.png'
import { useState } from "react";
import HomePageStyle from './../pages/home/HomePageStyle.module.css'
import logo from './../assets/logo-White.svg'
export const Footer = () => {
  const style = FooterStyle;
  
  const [displayContact, setDisplayContact] = useState(false);
  return (
    <div>
      <div
          className={HomePageStyle.contactContainer}
          data-showContact={displayContact}
        >
          <InlineWidget
            url="https://calendly.com/ddd-invoices/30min"
            className={HomePageStyle.widget}
          />{" "}
          <div className={HomePageStyle.buttonHolderContact}>
            {" "}
            <button
              className="buttonOrange"
              onClick={() => {
                setDisplayContact(!displayContact);
              }}
            >
              Close
            </button>{" "}
          </div>
        </div>
   
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
            <button  onClick={() => {
                setDisplayContact(!displayContact);
              }} className="buttonOrange">Talk to us</button>
            <button className="buttonTransparent">Login</button>
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
            <li >Solutions</li>
           
            <li style={{"opacity":"0.5"}}>Product</li>
            <li style={{"opacity":"0.5"}}>Build</li>
          </ul>

          <ul>
            <li>DDDinvoices</li>
            <li style={{"opacity":"0.5"}}>API documentation</li>
            <li style={{"opacity":"0.5"}}>Company</li>
            <li style={{"opacity":"0.5"}}>Blog</li>
          </ul>

         
          <ul>
            <li>Legal</li>
            <li style={{"opacity":"0.5"}}>Terms</li>      
            <li style={{"opacity":"0.5"}}>Privacy policy</li>                 
          </ul>
          <ul>
            <li >Get in touch</li>
            <li style={{"opacity":"0.5"}}>Contact</li>  
            <li><img src={twitter} alt="twitter" /> <img src={linkedin} alt="linkedin" /> <img src={github} alt="github" /></li>                    
          </ul>
        </div>
      </div>
    </div> </div>
  );
};
