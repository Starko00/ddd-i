import HomePageStyle from "./HomePageStyle.module.css";
import mainBanner from "./../../assets/mainBanner.png";
import stepsImg from "./../../assets/4steps.png";
import invoice from "./../../assets/invoice.png";
import { useNavigate } from "react-router-dom";
import icon1 from "./../../assets/icons/icon1.svg";
import icon2 from "./../../assets/icons/icon2.svg";
import icon3 from "./../../assets/icons/icon3.svg";
import icon4 from "./../../assets/icons/icon4.svg";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import bScenes from "./../../assets/bScenes.png"
import icon5 from "./../../assets/icons/icon5.svg";

import icon7 from "./../../assets/icons/icon7.svg";
export const TransformationPage = () => {
  const style = HomePageStyle;
  const navigate = useNavigate();
  const [displayContact, setDisplayContact] = useState(false);
  return (
    <div className={style.pageContaienr}>
      <div className={style.contactContainer} data-showContact={displayContact}>
        <InlineWidget
          url="https://calendly.com/ddd-invoices/30min"
          className={style.widget}
        />{" "}
        <div className={style.buttonHolderContact}>
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
      <div className={style.mainHeder}>
        <div className={style.textHolder}>
          <h1>1 API for all invoicing requirements</h1>
          <h2>
            Integrate our API to send us invoice data.We create a compliant
            e-invoice, deliver it globally and store it on our secured cloud.
          </h2>
          <div className={style.buttonsHolder}>
            <button
              className="buttonOrange"
              onClick={() => {
                setDisplayContact(!displayContact);
              }}
            >
              Talk to us
            </button>
            <button className="buttonTransparent">Log in</button>
          </div>
        </div>
        <div className={style.mainHeroImgHolder}>
          <img src={mainBanner} />
        </div>
      </div>
      <div className={style.limitContainer}>
        <div className={style.codeHolder}>
          <div className={style.imgHolder}>
            <img src={stepsImg} alt="four steps img" />
          </div>
          <div className={style.codeText}>
            <h2>Get up and running in minutes</h2>
            <h1>How to get started?</h1>
            <div className={style.stepsHolder}>
              <p>
                <br/>
                Connecting your software to e-invoicing API is a simple process.{" "}
                <br/>
              </p>
              <ol>
                <li>Read the documentation</li>
                <li>Register as a service provider</li>
                <li>Create your own API key and start testing in a sandbox</li>
                <li>Switch to production when ready to start e-invoicing</li>
              </ol>
            </div>
            <div className={style.buttonsHolder}>
              <button className="buttonOrange">Start for free</button>{" "}
              <button className="buttonOrange">Read the docs</button>
            </div>
          </div>
        </div>

        <div className={style.thirdSection}>
          <div className={style.left}>
            <h1 style={{ "max-width": "800px" }}>
              Give your software the ability of e-invoicing
            </h1>
            <div className={style.text}>
              <p>
                Never worry about local or international regulations, formats or
                syntaxes regarding invoices. Connect to local tax authorities &
                global e-invoicing networks and stay compliant - forever.
              </p>
            </div>
            <button
              className="buttonOrange"
              onClick={() => {
                setDisplayContact(!displayContact);
              }}
            >
              Contact
            </button>
          </div>
          <div className={style.mapHolder}>
            <img src={invoice} alt="e-invoice" />
          </div>
        </div>

        <div className={style.codeHolder}>
          <div className={style.code}><img src={bScenes} alt="" /></div>
          <div className={style.codeText}>
            <h1>Completely hidden behind your UI</h1>

            <p>
              Your customers will never leave your solution, so you maintain
              the whole user experience journey. This allows you to focus on
              what you are best at and leave the boring part to us.<br/><br/> We will
              provide you with the management module, where you can take care of
              invoices for you or your clients if neccessary.
            </p>
          </div>
        </div>
        <div className={style.smallSolutionsContainer} style={{"maxWidth":"1200px"}}>
          <h3>Adjustable to your needs</h3>
          <p>
            Different levels of integrations to provide compliant invoicing for
            SaaS, ERsP, accounting softwares or enterprises and global
            suppliers.
          </p>

          <div className={style.smallSolutionsHolder}>
            {/* First */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon4} alt="" />
              </div>
              <h4>e-Invoice creation</h4>
              <p>
                We create a compliant e-invoice from invoice data send from your
                software in .JSON form.
              </p>
            </div>

            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon7} alt="" />
              </div>
              <h4>Global distribution</h4>
              <p>
                Send to local tax authorities, global e-invoicing networks,
                email, PDF, .XML.
              </p>
            </div>

            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon5} alt="" />
              </div>
              <h4>Management</h4>
              <p>
                Manage your clients e-invoices with a powerful management
                module.
              </p>
            </div>

            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon1} alt="" />
              </div>
              <h4>Storage</h4>
              <p>
                Safely store for up to 10 years in digitally signed and legally
                approved archive.
              </p>
            </div>

            {/*  */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon2} alt="" />
              </div>
              <h4>Embedded options</h4>
              <p>
                Embed visualization or editable UI directly into software,
                branded with your logo.
              </p>
            </div>
            {/*  */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}>
                <img src={icon3} alt="" />
              </div>
              <h4>Automation</h4>
              <p>
                Automate workflow of an e-invoice. Set it up once and never
                again. Simple and easy.
              </p>
            </div>
          </div>

          <div className={style.largeButtonHolder}>
            <button className="buttonOrange">
              Learn more about our features
            </button>
          </div>
        </div>
        <div className={style.secondSection}>
          <p>Why DDD invoicing</p>
          <h1>Strong technology foundation</h1>
          <div className={style.cardsHolder}>
            <div className={style.card}>
              <h1>Experience</h1>

              <p>
                {" "}
                <b>35 years</b> of experience in the field of business
                informatics has led our team to develop an easy, powerful
                solution with <b>direct integration.</b>
              </p>
            </div>

            <div className={style.card}>
              <h1>Faster</h1>

              <p>
                {" "}
                Experience flawless connectivity{" "}
                <b>without any further maintenance.</b> Send globally,{" "}
                <b>without worrying about syntaxes</b> in the blink of an eye.
              </p>
            </div>

            <div className={style.card}>
              <h1>Secure</h1>

              <p>
                {" "}
                256bit encrypting algorithms and advanced hashing are making
                sure{" "}
                <b>
                  your data Is being transferred without any security issues.
                </b>
              </p>
            </div>
            <div className={style.card}>
              <h1>Reliable</h1>

              <p>
                {" "}
                Our solution is build on{" "}
                <b>powerful back-end development platform</b>
                responsible for projects of private & government nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
