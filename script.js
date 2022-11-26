/* Felhasználom a BMI órai tanultakat
megtalal() függvény:
- az azonosít függvény return-ját elmentem egy változóba- eredmény,
- meghívok egy függványt, amivel kiírom a return/változót
function kiiras(szoveg) függvény
- a BMI órán tanultak alapján kiírom az eredményt

function azonosit() függvény
- beazonosítom a kiválasztott település/konténer árát


mindent ellenőrzök a consolban
*/

function megtalal() {
  // a BMI alapján
  eredmeny = azonosit();
  kiiras(eredmeny);
  console.log(eredmeny);
}



function azonosit() {

// Gyál

if (contener == "cont4" && hely == "telepGyal_Vecses") {
    return "39000 Ft ";
  } else if (contener == "cont5" && hely == "telepGyal_Vecses") {
    return "41000 Ft ";
  } else if (contener == "cont6" && hely == "telepGyal_Vecses") {
    return "41000 Ft ";
  } else if (contener == "cont4v" && hely == "telepGyal_Vecses") {
    return "43000 Ft ";
  } else if (contener == "cont5v" && hely == "telepGyal_Vecses") {
    return "47000 Ft ";
  } else if (contener == "cont6v" && hely == "telepGyal_Vecses") {
    return "51000 Ft ";
  } else if (contener == "cont8v" && hely == "telepGyal_Vecses") {
    return "63000 Ft ";
  }

  // Budapest 9., 10. és 17. ker.

  if (contener == "cont4" && hely == "telepBp9_10_17") {
    return "47000 Ft ";
  } else if (contener == "cont5" && hely == "telepBp9_10_17") {
    return "50000 Ft ";
  } else if (contener == "cont6" && hely == "telepBp9_10_17") {
    return "53000 Ft ";
  } else if (contener == "cont4v" && hely == "telepBp9_10_17") {
    return "51000 Ft ";
  } else if (contener == "cont5v" && hely == "telepBp9_10_17") {
    return "56000 Ft ";
  } else if (contener == "cont6v" && hely == "telepBp9_10_17") {
    return "61000 Ft ";
  } else if (contener == "cont8v" && hely == "telepBp9_10_17") {
    return "71000 Ft ";
  }

  // Budapest XX., XXI., XXII. és XIX. ker
  if (contener == "cont4" && hely == "telepBp20_21_22_19") {
    return "43000 Ft ";
  } else if (contener == "cont5" && hely == "telepBp20_21_22_19") {
    return "45000 Ft ";
  } else if (contener == "cont6" && hely == "telepBp20_21_22_19") {
    return "47000 Ft ";
  } else if (contener == "cont4v" && hely == "telepBp20_21_22_19") {
    return "47000 Ft ";
  } else if (contener == "cont5v" && hely == "telepBp20_21_22_19") {
    return "51000 Ft ";
  } else if (contener == "cont6v" && hely == "telepBp20_21_22_19") {
    return "55000 Ft ";
  } else if (contener == "cont8v" && hely == "telepBp20_21_22_19") {
    return "65000 Ft ";
  }
}








