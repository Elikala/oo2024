class AineOmadused {
  private erisoojusId: number[] = [];
  private erikaalId: number[] = [];
  private nimetus: string = "";

  constructor(
    private kg: number = 0,
    private J: number = 0,
    private K: number = 0,
    private kuupmeeter: number = 0,
    nimetus: string = ""
  ) {
    this.nimetus = nimetus;
  }

  lisa() {
    const erisoojus = this.J / (this.kg * this.K);
    const erikaal = this.kg / this.kuupmeeter;

    this.erisoojusId.push(erisoojus);
    this.erikaalId.push(erikaal);
  }

  küsiErisoojusId(): number[] {
    return this.erisoojusId;
  }

  küsiErikaalId(): number[] {
    return this.erikaalId;
  }

  küsiNimetus(): string {
    return this.nimetus;
  }
}

// Loo rakendus andmete sisestamiseks ja vaatamiseks
const aine1 = new AineOmadused(5, 10, 7, 2, "Metall");

// Lisatud andmed
aine1.lisa();

// Andmete kuvamine
console.log("Erisoojus:", aine1.küsiErisoojusId());
console.log("Erikaal:", aine1.küsiErikaalId());
console.log("Nimetus:", aine1.küsiNimetus());



// Rakenduse tulemus
// Erisoojus: [ 0.2857142857142857 ]
// Erikaal: [ 2.5 ]
// Nimetus: Metall