import NavigationStyle from "./NavigationStyle.module.css";
import logoWhite from "./../assets/logo-White.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { InlineWidget } from "react-calendly";
import HomePageStyle from "./../pages/home/HomePageStyle.module.css";
import { useEffect, useState } from "react";
export const Navigation = () => {
  const style = NavigationStyle;
  const navigate = useNavigate();
  const location = useLocation()
  const [displayContact, setDisplayContact] = useState(false);
  const [menuState, setMenuState] = useState(false);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname])
  return (

    <div className={HomePageStyle.containerMother}>
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
      <div
        className={style.menuIconsHolder}
        onClick={() => {
          setMenuState(!menuState);
        }}
      >
        <FiMenu className={style.menuIcon} data-open={menuState} />
        <FiX className={style.menuClose} data-open={!menuState} />
      </div>
      <div className={style.container} data-open={menuState}>
        <div className={style.logoHolder} onClick={() => navigate("/")}>
          <img src={logoWhite} alt="logo" />
        </div>
        <div className={style.menuItemsHolder}>
          <ul className={style.menuItemsHolder}>
            <li
              onClick={() => {
                setMenuState(!menuState);
                navigate("transformation");
              }}
            >
              Product
            </li>

            <li
              onClick={() => {
                setMenuState(!menuState);
                navigate("build");
              }}
            >
              Build
            </li>
            <li onClick={() => navigate("documentation")}>
              API Documentation{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_614_3769)">
                  <path
                    d="M11.5693 3.19971H9.16934C8.28568 3.19971 7.56934 3.91606 7.56934 4.79971V11.1998C7.56934 12.0834 8.28568 12.7998 9.16934 12.7998H15.5693C16.453 12.7998 17.1693 12.0834 17.1693 11.1998V8.79971"
                    stroke="white"
                    stroke-opacity="1"
                    stroke-width="1.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.8241 2.9501L11.9883 7.60374L12.751 8.39635L17.4194 3.90386L17.4195 7.2001L18.5195 7.20009L18.5194 2.40009V1.8501H17.9694H13.1695V2.9501H16.8241Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_614_3769"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_614_3769"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_614_3769"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </li>

            <li>
              <button
                className={style.startForFree}
                onClick={() => {
                  setMenuState(!menuState);
                  setDisplayContact(!displayContact);
                }}
              >
                Talk to us
              </button>
            </li>
            <li
              onClick={() => {
                setMenuState(!menuState);
                navigate("login");
              }}
            >
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
