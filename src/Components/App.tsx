import React, { useState } from "react";
import { Gra } from "../BO/Gra";
import { StanGryTyp } from "../BO/Gra";
import { InicjacjaGraczy } from "./InicjacjaGraczy";
import config from "../config";
import { Rozgrywka } from "./Rozgrywka";

const App = () => {
  const [stanGry, zmienStanGry] = useState(config.gra.StanGry);

  const zmianaStanuGry = (nowyStan: StanGryTyp) => {
    config.gra.StanGry = nowyStan;
    zmienStanGry(config.gra.StanGry);
  };

  return (
    <>
      {console.log("App")}
      {console.log(config.gra)}
      {stanGry === StanGryTyp.Inicjacja && (
        <InicjacjaGraczy ZmianaStanuGry={zmianaStanuGry} />
      )}
      {stanGry === StanGryTyp.Rozgrywka && <Rozgrywka />}
      <p>dasdas</p>
    </>
  );
};

export default App;
