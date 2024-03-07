class EsemeteKogum {
  esemed: number[] = [];

  lisaEsemed(...uuedEsemed: number[]){
    this.esemed.push(...uuedEsemed);
  }

  saaEsemed(): number[] {
    return this.esemed;
  }

  uhtlustaTemperatuurid(){
    const keskmineTemperatuur = this.keskmineTemperatuur();
    this.esemed = this.esemed.map(temperatuur => temperatuur - keskmineTemperatuur);
  }

  kogumiTemperatuur(): number {
    const summa = this.esemed.reduce((acc, temperatuur) => acc + temperatuur, 0);
    const keskmine = summa / this.esemed.length;
    return keskmine;
  }

  keskmineTemperatuur(): number {
    const summa = this.esemed.reduce((acc, temperatuur) => acc + temperatuur, 0);
    return summa / this.esemed.length;
  }
}


// Tulemuse testimine
const kogum = new EsemeteKogum();
kogum.lisaEsemed(10, 15, 20, 25);

console.log("Algne kogum:", kogum.saaEsemed());

kogum.uhtlustaTemperatuurid();
console.log("Ühtlustatud kogum:", kogum.saaEsemed());

const kogumiTemperatuur = kogum.kogumiTemperatuur();
console.log("Kogumi temperatuur pärast ühtlustamist:", kogumiTemperatuur);


// Rakenduse tulemus
// Algne kogum: [ 10, 15, 20, 25 ]
// Ühtlustatud kogum: [ -7.5, -2.5, 2.5, 7.5 ]
// Kogumi temperatuur pärast ühtlustamist: 0