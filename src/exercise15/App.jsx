import { useState } from "react";
import LanguageContext from "./exercise15/LanguageContext";
import Greeting from "./exercise15/Greeting";

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={language}>
      <button
        onClick={() =>
          setLanguage(
            language === "english" ? "spanish" : "english"
          )
        }
      >
        Switch to {language === "english" ? "Spanish" : "English"}
      </button>

      <Greeting />
    </LanguageContext.Provider>
  );
}

export default App;