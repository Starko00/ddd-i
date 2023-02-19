import HomePageStyle from "./HomePageStyle.module.css";
import mainBanner from "./../../assets/mainBanner.png";
import puzzle from "../../assets/icons/puzzle.png";
import pc from "../../assets/icons/pc.png";
import { useNavigate } from "react-router-dom";
export const BuildPage = () => {
  const style = HomePageStyle;
  const navigate = useNavigate();
  return (
    <div className={style.pageContaienr}>
      <div className={style.mainHeder}>
        <div className={style.textHolder}>
          <h1>Building your own invoicing solution?</h1>
          <h2>
            We offer more than 200 APIs with which we help you build an
            invoicing solution with incredibly short time-to-market.
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
            <img src={pc} alt="four steps img" />
          </div>
          <div className={style.codeText}>
            <h2>Let’s get creative</h2>
            <h1>We did the development ... </h1>
            <div className={style.stepsHolder}>
              <p>
                Pre-prepared APIs from developers for developers. Integrate them
                in minutes and create the exact solution that is including
                invoicing.
              </p>
            </div>
          </div>
        </div>

        <div className={style.thirdSection}>
          <div className={style.left}>
            <h1 style={{ "max-width": "800px" }}>... you do the choosing.</h1>
            <div className={style.text}>
              <p>Choose among 200 APIs and create your solution in days.</p>
              <p>We offer APIs for:</p>
              <p>
                <ul>
                  <li> Read the documentation</li>
                  <li>Register as a service provider</li>
                  <li>
                    Create your own API key and start testing in a sandbox
                  </li>
                  <li>Switch to production when ready to start e-invoicing</li>
                </ul>
              </p>
            </div>
            <button
              className="buttonOrange"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact us
            </button>
          </div>
          <div className={style.mapHolder}>
            <img src={puzzle} alt="e-invoice" />
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
