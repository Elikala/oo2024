// Funktsioon pannkoogiRetsept võtab vastu jahu, piima, muna ja portsioni suuruse ning tagastab objekti koos kogustega.
function pannkoogiRetsept(jahu: number, piim: number, muna: number, portsion: number): { jahu: number, piim: number, muna: number } {
    // Arvutab igale koostisosale vastava koguse, korrutades selle portsioni suurusega.
    const kogused = {
        jahu: jahu * portsion,
        piim: piim * portsion,
        muna: muna * portsion,
    };

    // Tagastab objekti, milles on koostisosade kogused.
    return kogused;
}

// Määrab konkreetsed kogused jahu, piima, muna ja portsioni suuruse jaoks.
const jahuKogus = 100;
const piimKogus = 200;
const munaKogus = 1;
const portsionSuurus = 4;

// Kutsutakse välja funktsioon pannkoogiRetsept, et saada kogused vastavalt määratud kogustele ja portsioni suurusele.
const kogused = pannkoogiRetsept(jahuKogus, piimKogus, munaKogus, portsionSuurus);

// Prindib välja koostisosade kogused ja nende mõõtühikud vastavalt määratud kogustele ja portsioni suurusele.
console.log(`Pannkookide koostisosade kogused ${portsionSuurus} portsjoni kohta:`);
console.log(`Jahu: ${kogused.jahu} grammi`);
console.log(`Piim: ${kogused.piim} ml`);
console.log(`Munad: ${kogused.muna} tk`);
