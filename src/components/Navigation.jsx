import NavigationStyle from "./NavigationStyle.module.css";
import logoWhite from "./../assets/logo-White.svg";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
export const Navigation = () => {
  const style = NavigationStyle;
  const navigate = useNavigate();

  const [menuState,setMenuState] = useState(false)
  return (
    <div className={style.containerMother} >
      <div className={style.menuIconsHolder} onClick={()=>{setMenuState(!menuState)}}>
        <FiMenu className={style.menuIcon}  data-open={menuState}/>
        <FiX className={style.menuClose} data-open={!menuState} />
      </div>
      <div className={style.container} data-open={menuState}>
        <div className={style.logoHolder} onClick={() => navigate("/")}>
          <img src={logoWhite} alt="logo" />
        </div>
        <div className={style.menuItemsHolder}>
          <ul className={style.menuItemsHolder}>
            <li
              className={style.innerListHolder}
              
            >
              Products
              <div className={style.innerList}>
                <ul>
                  <li onClick={() => navigate("transformation")}>
                    Transformation
                  </li>
                  <li onClick={() => navigate("integration")}>Integration</li>
                  <li onClick={() => navigate("custom")}>Custom</li>
                </ul>
              </div>
            </li>
            <li onClick={() => navigate("build")}>Build</li>
            <li onClick={() => navigate("documentation")}>API Documentation</li>
            <li onClick={() => navigate("pricing")}>Pricing</li>
            <li>
              <button
                className={style.startForFree}
                onClick={() => navigate("start")}
              >
                Start for free
              </button>
            </li>
            <li onClick={() => navigate("login")}>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
