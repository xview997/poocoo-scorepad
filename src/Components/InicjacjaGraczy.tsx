import React, { useState } from "react";
import { Gra, StanGryTyp } from "../BO/Gra";
import config from "../config";
import "./InicjacjaGraczy.css";

interface InicjacjaGraczyProps {
  ZmianaStanuGry(StanGry: StanGryTyp): void;
}

export const InicjacjaGraczy: React.SFC<InicjacjaGraczyProps> = (props) => {
  const txt_DodajGracza = "Dodaj gracza";
  const txt_UsunGracza = "Usuń gracza";
  const txt_StartGry = "Start gry";

  const { ZmianaStanuGry } = props;
  const { gra } = config;

  const [gracze, zmienGraczy] = useState(gra.Gracze);

  const zmianaNazwyGracza = (e: React.FormEvent<HTMLInputElement>) => {
    var graczId: number = Number(e.currentTarget.id);
    var inicjaly = e.currentTarget.value;
    var gracze = gra.Gracze.slice();
    gracze.forEach((g) => {
      if (g.id === graczId) {
        g.inicjaly = inicjaly;
      }
    });
    gra.Gracze = gracze;
    zmienGraczy(gracze);
    console.log(Gra);
  };

  const dodajGracza = () => {
    config.gra.DodajGracza();
    zmienGraczy(gra.Gracze.slice());
  };

  const usunGracza = () => {
    gra.UsunGracza();
    zmienGraczy(gra.Gracze.slice());
  };

  const generujInputy = () => {
    return gracze.map((g) => {
      return (
        <input
          key={g.id}
          id={g.id.toString()}
          value={g.inicjaly}
          onChange={zmianaNazwyGracza}
        />
      );
    });
  };

  const startGry = () => {
    ZmianaStanuGry(StanGryTyp.Rozgrywka);
  };

  return (
    <>
      {console.log("render")}
      <button onClick={dodajGracza}>{txt_DodajGracza}</button>
      <button onClick={usunGracza}>{txt_UsunGracza}</button>
      <p>Ilość graczy: {gra.Gracze.length}</p>
      {generujInputy()}
      <button onClick={startGry}>{txt_StartGry}</button>
    </>
  );
};
