let eesnimi:string="Juku";
let kogus:number=5;
for(let i:number=0; i<kogus; i++) {
  console.log("Tere, "+eesnimi+" "+i+". korda");
}

//trükkida välja arvude ruudud ühest kahekümneni
// 1 4 9 16 25 ...

let ruut:number=0
for(let i:number=0; i<20; i++) {
  ruut=i*i
//  console.log(ruut);
}

//trükkige välja muutujatega ette antud suuruses
//korrutustabel

//for(let i:number=1; i<10; i++) {
//  for(let k:number=1; k<10; i++) {
//    console.log(i*k)
//  }
//}

let ridu:number=7, veerge:number=8;
for(let rida:number=1; rida<10; rida++) {
  let reastr:string=""
  for(let veerg:number=1; veerg<10; veerg++) {
    //reastr+=rida*veerg+" ";
    reastr+=(rida*veerg).toString().padStart(4);

  }
  console.log(reastr)
}


//process.stdout.write("a");