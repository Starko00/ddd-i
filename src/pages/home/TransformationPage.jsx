import HomePageStyle from "./HomePageStyle.module.css";
import mainBanner from "./../../assets/mainBanner.png";
import stepsImg from "./../../assets/4steps.png";
import invoice from "./../../assets/invoice.png";
import { useNavigate } from "react-router-dom";
export const TransformationPage = () => {
  const style = HomePageStyle;
  const navigate = useNavigate();
  return (
    <div className={style.pageContaienr}>
      <div className={style.mainHeder}>
        <div className={style.textHolder}>
          <h1>Transformation of invoice data to e-invoices</h1>
          <h2>
            Connect your software and send us invoice data. We will create a
            compliant e-invoice and deliver it globally.{" "}
          </h2>
          <div className={style.buttonsHolder}>
            <button className="buttonOrange">Start for free</button>
            <button
              className="buttonTransparent"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact us
            </button>
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
                Connecting your software to e-invoicing API is a simple process.{" "}
              </p>
              <ol>
                <li> Read the documentation</li>
                <li>Register as a service provider</li>
                <li>Create your own API key and start testing in a sandbox</li>
                <li>Switch to production when ready to start e-invoicing</li>
              </ol>
            </div>

            <button className="buttonOrange">Read the docs</button>
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
                syntaxes regarding invoices. Connect to global e-invoicing
                networks (PEPPOL) and tax authorities. Give your software a
                global e-invoicing ability. Forever.
              </p>
            </div>
            <button
              className="buttonOrange"
              onClick={() => {
                navigate("/contact");
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
          <div className={style.code}>adasd</div>
          <div className={style.codeText}>
            <h1>We stay completely hidden behind your UI</h1>

            <p>
              Your customers will never leave your solution, so you maintain the
              whole user experience journey. This allows you to focus on what
              you are the best at and leave the boring part to us.
            </p>

            <button className="buttonOrange">Start for free</button>
          </div>
        </div>
        <div className={style.smallSolutionsContainer}>
          <h2>Solution</h2>
          <h3>Adjustable to your needs</h3>
          <p>Different levels of integrations to provide compliant invoicing for SaaS, ERsP, accounting softwares or enterprises and global suppliers..</p>

          <div className={style.smallSolutionsHolder}>
            {/* First */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>e-Invoice creation</h4>
              <p>We create a compliant e-invoice from invoice data send from your software in .JSON form.</p>
            </div>


            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Global distribution</h4>
              <p>Send to local tax authorities, global e-invoicing networks, email, PDF, .XML.</p>
            </div>


            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Management</h4>
              <p>Manage your/your clients e-invoices with a powerful management module.</p>
            </div>


            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Storage</h4>
              <p>Safely store for up to 10 years in digitally signed and legally approved archive.</p>
            </div>

{/*  */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Embedded options</h4>
              <p>Embed visualization or editable UI directly into software, branded with your logo.</p>
            </div>
            {/*  */}
            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Automation</h4>
              <p>Automate workflow of an e-invoice. Set it up once and never again. Simple and easy.</p>
            </div>

            <div className={style.smallSolution}>
              <div className={style.smallSolutionIconHolder}></div>
              <h4>Much more</h4>
              <p>Find out other options we offer and adding every day.</p>
            </div>


          </div>

          <div className={style.largeButtonHolder}><button className="buttonOrange">Contact us</button></div>
              
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
