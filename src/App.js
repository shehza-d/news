import "./index.css";
import { Header, Content, Footer } from "./components";
import { useState } from "react";

export default function App() {
  //useState ka Variable for theme mode dark ya light
  const [themeMode, setThemeMode] = useState(false);

  //function to enable dark mode
  const toggleThemeMode = () => setThemeMode(!themeMode);

  return (
    <div className={themeMode ? "dark" : "light"}>
      {/* themeMode ka useState variable ja raha hy mode ky nam se aur toggleTh... wala function aaraha hy idher call hoga */}
      <Header toggleThemeMode={toggleThemeMode} mode={themeMode} />
      <Content />
      <Footer />
    </div>
  );
}
