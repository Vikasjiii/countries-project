import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <header className={isDark ? "header-container dark" : "header-container"}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark((prev) => !prev);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={isDark ? "fa-regular fa-sun" : "fa-regular fa-moon"} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
