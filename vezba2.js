//  FUNCTION  // - blok koda koji moze da se koristi vise puta.

// () ARGUMENTI
// {} BLOK KODA


// unos = prompt("unesite vase ime");
// function ime(unos) {

// console.log("vase ime je:", unos);

// }
// ime(unos);


// a = 5;
// b = 5;
// console.log(a===b);
// // resenje: true

// a = [1,2,3];
// b = [1,2,3];
// console.log(a===b);
// // resenje: false


//  function twiceAsOld(dadYearsOld, sonYearsOld) {
//    return Math.abs(dadYearsOld - 2 * sonYearsOld);
//  }


// function broj(niz) {
// min1=niz[0];
// min2=niz[0];
// for (el of niz) {
//     if (min1 > el) {
//         min1 = el;
//     } else if (min2 > el && min1 > el) {
//         min2 = el;
//     }
// }
// console.log("Najmanji je: ", min1);
// console.log("Drugi najmanji je:", min2);
// }
// broj([3, 5, 1, 9, 4, 2]);



// function broj(niz) {
//     max =niz[0];
//     for (el of niz) {
//         if (Math.abs(max)<= Math.abs(el)) {
//             max=el;
//         } 
//     }
// console.log("Broj sa najvise cifara je:", max);
// }
// broj([26, 254, 328, -120, 1000, 567, -1233]);



// data = [3, 0, 24, 54, 0, 123, 0, 32, 63]
// function sort(niz) {

//     for (i = 0; i < niz.length; i++) {
//         if (niz[i] === 0) {
//             niz.splice(i, 1);
//             niz.push(0);
//         }
//     }
//     console.log(niz);


// }
// sort(data);

// data = [3, 24, 54, 123, 32, 63]

// dodati na kraju niza sve nule.


data = [3, 24, 54, 123, 32, 63]

function calculateAverage(niz) {
sum = 0;
for (el of niz) {
    sum += el;
}
console.log("Average is:", Math.ceil(sum/niz.length));


}
calculateAverage(data);