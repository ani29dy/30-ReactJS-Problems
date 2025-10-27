import React from "react";
import { useLocalization } from "../LocalizeContext";

const Translate = () => {
  const { setLocal, local, translate } = useLocalization();
  const handleLocalChange = (newLocal) => {
    setLocal(newLocal);
  };
  return (
    <div>
      <h1>{translate("greeting")}</h1>
      <h1>{translate("welcome")}</h1>
      <button onClick={() => handleLocalChange("en")}>English</button>
      <button onClick={() => handleLocalChange("es")}>Espanol</button>
    </div>
  );
};

export default Translate;
