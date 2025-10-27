import { createContext, useContext, useState } from "react";

const LocalizeContext = createContext();

export const useLocalization = () => {
  return useContext(LocalizeContext);
};

export function LocalizeProvider({ children }) {
  const [local, setLocal] = useState("en");
  const localizedString = {
    en: {
      greeting: "Hello World!!!",
      welcome: "Welcome to my App",
    },

    es: {
      greeting: "Hola Mundo!!!",
      welcome: "Bienvenido a mi application",
    },
  };

  const translate = (key) => {
    return localizedString[local][key];
  };

  return (
    <LocalizeContext.Provider value={{ setLocal, local, translate }}>
      {" "}
      {children}{" "}
    </LocalizeContext.Provider>
  );
}
