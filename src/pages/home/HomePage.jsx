import HomePageStyle from "./HomePageStyle.module.css";
import mainBanner from "./../../assets/mainBanner.png";
import map from "./../../assets/map.png";
import client1 from "./../../assets/clientLogo1.png";
import client2 from "./../../assets/clientLogo2.png";
import client3 from "./../../assets/clientLogo3.png";
import client4 from "./../../assets/clientLogo4.png";
import client5 from "./../../assets/clientLogo5.png";
import client6 from "./../../assets/clientLogo6.png";
import client7 from "./../../assets/clientLogo7.png";
import client8 from "./../../assets/clientLogo8.png";
import client9 from "./../../assets/clientLogo9.png";
import client10 from "./../../assets/clientLogo10.png";

export const HomePage = () => {
  const style = HomePageStyle;
  return (
    <>
      {" "}
      <div className={style.pageContaienr}>
        <div className={style.mainHeder}>
          <div className={style.textHolder}>
            <h1>Global e-invoicing for your business</h1>
            <h2>
              Comply with local & global e-invoicing regulations with 1 API.
              Integrate with ERPs, SaaS, accounting softwares & more.{" "}
            </h2>
            <div className={style.buttonsHolder}>
              <button className="buttonOrange">Start for free</button>
              <button className="buttonTransparent">Contact us</button>
            </div>
          </div>
          <div className={style.mainHeroImgHolder}>
            <img src={mainBanner} />
          </div>
        </div>

        <div className={style.secondSection}>
          <p>Ensure compliance - forever</p>
          <h1>Main features</h1>
          <div className={style.cardsHolder}>
            <div className={style.card}>
              <h1>Compliance & Tax</h1>
              <h2>E-invoices & real-time reporting</h2>
              <p>
                {" "}
                Easily comply and distribute e-invoices globally.Give us invoice
                data and we will make sure to distribute in correct local
                format.
              </p>
              <button className="buttonOrange">Read more</button>
            </div>

            <div className={style.card}>
              <h1>Easy Integration</h1>
              <h2>From developers for developers</h2>
              <p>
                {" "}
                Completely hidden behind your UI, we quietly take care for all
                your/your clients invoices. Built with developers in mind the
                integrations is done in hours.
              </p>
              <button className="buttonOrange">Read more</button>
            </div>

            <div className={style.card}>
              <h1>Connectivity</h1>
              <h2>No more troubles</h2>
              <p>
                Send to local tax authorities, clients, PEPPOL and more.Never
                worry about standards, tax rates, VAT, rounding errors,
                validations, calculations again.
              </p>
              <button className="buttonOrange">Read more</button>
            </div>
          </div>
        </div>

        <div className={style.thirdSection}>
          <div className={style.left}>
            <p>Scale your business</p>
            <h1>In 6 countries</h1>
            <div className={style.text}>
              <p>
                Instant compliance with the latest regulations in each of the
                countries. Make an invoice and send it. We make sure that
                everything is processed according to the regulations.
              </p>
            </div>
            <button className="buttonOrange">Contact</button>
          </div>
          <div className={style.mapHolder}>
            <img src={map} alt="Map" />
          </div>
        </div>
        <div className={style.clientsHolder}>
          <img src={client1} alt="client1" />
          <img src={client2} alt="client1" />
          <img src={client3} alt="client1" />
          <img src={client4} alt="client1" />
          <img src={client5} alt="client1" />
          <img src={client6} alt="client1" />
          <img src={client7} alt="client1" />
          <img src={client8} alt="client1" />
          <img src={client9} alt="client1" />
          <img src={client10} alt="client1" />
        </div>
        <div className={style.secondSection}>
          <p>Solutions</p>
          <h1>Something for everyone</h1>
          <div className={style.cardsHolder}>
            <div className={style.card}>
              <h1>Transformation</h1>

              <p>
                {" "}
                Data to e-invoice Global delivery Invoices stay on our cloud for
                48h.
              </p>
              <button className="buttonOrange">Read more</button>
              <div className={style.blueHolder}>
                For SaaS, ERPs & ISVs who only require compliance
              </div>
            </div>

            <div className={style.card}>
              <h1>Integration</h1>
              <h2>Full e-invoicing service </h2>
              <p>
                {" "}
                While label UI Data to e-invoice Global delivery Management 10
                year storage Automation
              </p>
              <button className="buttonOrange">Read more</button>
              <div className={style.blueHolder}>
                For SaaS, ERPs, ISV without their own cloud archive
              </div>
            </div>

            <div className={style.card}>
              <h1>Custom</h1>

              <p>
                {" "}
                Contact us for your specific invoicing/e-invoices/fiscalization
                needs and we will create create a solution for you.
              </p>
              <button className="buttonOrange">Read more</button>
              <div className={style.blueHolder}>
                For large global suppliers, SaaS & ERP systems
              </div>
            </div>
            <p className={style.smallLink}>
              BUILD YOUR OWN - Use our powerful APIs to build you next
              e-invoicing solution with lightning speed.
            </p>
          </div>
        </div>
        <div className={style.codeHolder}>
          <div className={style.code}>adasd</div>
          <div className={style.codeText}>
            <h2>Designed for developers</h2>
            <h1>Powerful and easy integration</h1>

            <p>
              We worked hard to give you the most powerful solution with as
              little integration trouble as possible. Explore whole API
              documentation and get up and running in hours.
            </p>
            <button className="buttonOrange">Read the docs</button>
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
    </>
  );
};
