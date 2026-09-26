import { useContext } from "react";
import LanguageContext from "./LanguageContext.js";

function Greeting() {
  const language = useContext(LanguageContext);

  return (
    <h1>
      {language === "english" ? "Hello!" : "Hola!"}
    </h1>
  );
}

export default Greeting;