class Ese {
  mass: number;
  temperatuur: number;
  viideAinele: string;

  constructor(mass: number, temperatuur: number, viideAinele: string) {
    this.mass = mass;
    this.temperatuur = temperatuur;
    this.viideAinele = viideAinele;
  }
}

class Rakendus {
  esemed: Ese[] = [];

  lisaEse(mass: number, temperatuur: number, viideAinele: string) {
    const uusEse = new Ese(mass, temperatuur, viideAinele);
    this.esemed.push(uusEse);
  }

  muudaEset(index: number, mass: number, temperatuur: number, viideAinele: string) {
    if (index >= 0 && index < this.esemed.length) {
      this.esemed[index].mass = mass;
      this.esemed[index].temperatuur = temperatuur;
      this.esemed[index].viideAinele = viideAinele;
    }
  }

  kustutaEse(index: number) {
    if (index >= 0 && index < this.esemed.length) {
      this.esemed.splice(index, 1);
    }
  }

  koguMassViiteAinega(viideAinele: string): number {
    return this.esemed
      .filter((ese) => ese.viideAinele === viideAinele)
      .reduce((acc, ese) => acc + ese.mass, 0);
  }
}

// Rakendus kuvamiseks
const rakendus = new Rakendus();

rakendus.lisaEse(10, 25, "vesi");
rakendus.lisaEse(5, 30, "õhk");
rakendus.lisaEse(15, 20, "vesi");

console.log("Kogumass veega:", rakendus.koguMassViiteAinega("vesi"));

rakendus.muudaEset(1, 8, 35, "õhk");

console.log("Kogumass õhuga pärast muutmist:", rakendus.koguMassViiteAinega("õhk"));

rakendus.kustutaEse(0);

console.log("Kogumass veega pärast kustutamist:", rakendus.koguMassViiteAinega("vesi"));


// Rakenduse tulemus
// Kogumass veega: 25
// Kogumass õhuga pärast muutmist: 8
// Kogumass veega pärast kustutamist: 15
