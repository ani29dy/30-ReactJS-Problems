import React, { useEffect } from "react";

const Themes = () => {
  useEffect(() => {
    document.title = "THEMES";
  }, []);
  return (
    <div>
      <h1>Themes</h1>
    </div>
  );
};

export default Themes;
