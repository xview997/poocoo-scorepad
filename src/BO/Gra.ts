import { Gracz } from "./Gracz";
import { Punkt } from "./Punkt";

export enum StanGryTyp {
  Inicjacja = 0,
  Rozgrywka = 1,
  DodawaniePunktow = 2,
  Podsumowanie = 3,
}

export class Gra {
  private txt_Gracz = "Gracz";

  public StanGry: StanGryTyp = StanGryTyp.Inicjacja;
  public Gracze: Gracz[] = [];
  public DataStart: Date = new Date();
  public DateEnd: Date = new Date();
  public Punkty: Punkt[] = [];

  constructor() {
    this.StanGryWczytaj();

    if (this.Gracze.length === 0) {
      this.InicjujGraczyStartowych();
    }
  }

  InicjujGraczyStartowych = () => {
    this.DodajGracza(`${this.txt_Gracz} 1`);
    this.DodajGracza(`${this.txt_Gracz} 2`);
  };

  StanGryZapisz = () => {};

  StanGryWczytaj = () => {};

  DodajGracza = (inicjaly: string | null = null) => {
    let nextId = 0;
    if (this.Gracze.length !== 0) {
      nextId = Math.max(...this.Gracze.map((p) => p.id)) + 1;
    }
    this.Gracze.push(
      new Gracz(nextId, inicjaly ?? `${this.txt_Gracz} ${nextId + 1}`)
    );
  };

  // usuwa ostaniego gracza
  UsunGracza = () => {
    if (this.Gracze.length !== 1) {
      this.Gracze.splice(-1, 1);
    }
  };
}
