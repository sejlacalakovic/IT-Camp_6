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


// data = [3, 24, 54, 123, 32, 63]

// function calculateAverage(niz) {
// sum = 0;
// for (el of niz) {
//     sum += el;
// }
// console.log("Average is:", Math.ceil(sum/niz.length));


// }
// calculateAverage(data);


// function capitaliseString() {
//     let fox = "the quick brown fox";
//     console.log(fox);

//     fox = fox.split(" ");

//     for (let i = 0; i < fox.length; i++) {

// let rec = fox[i];
// rec = rec.split("");

// rec[0] = rec[0].toUpperCase();

// rec = rec.join("");

// fox[i] = rec;

//     }
//     fox = fox.join("");
//     console.log(fox);
// }

// capitaliseString();


// function digitize(n) {
//     n = n.toString()
//     arr = []
//     for (i = n.length - 1; i >= 0; i--) {
//         arr.push(parseInt(n[i]))
//     }
//     return arr
// }


// forEach - PROLAZI KROZ NJIZ SVE DOK IMA ELEMENATA U NJEMU.

// prvi macin
// function sayHello() {
//     console.log("hello");
// }
//    data = [1, 2, 3, 4, 5, 6]

//    data.forEach(sayHello)

    
// drugi nacin
// function sayHello() {}

// a = function ()  {
//     console.log("Hello");
// };

// a();


// treci nacin 
// b = () => {
//     console.log("Hello");
// };
// b();

// data = [1, 2, 3, 4, 5, 6]
// data.forEach(function () {
//        console.log("hello");
//     });
    
    

// data = [1, 2, 3, 4, 5, 6];

// data.forEach((a, i, c) => {
//     console.log(a, "je na indeksu:", i);
// });


 // MAP - PRIMENJUJE NA SVAKU FUNKCIJU ELEMENT I VRACA


// data = [1, 2, 3, 4, 5, 6];

// novi = data.map((el, i) => {
// return el + i;
// });
// console.log(data);
// console.log(novi);


// FILTER - DOBIJA FUNKCIJU, NA OSNOVU USLOVA
// ON NAM VRACA TAJ ELEMENT

// data = [1, 2, 3, 4, 5, 6];
// novi = data.filter((el) => {
//     return el > 1;
// });
// console.log(data);
// console.log(novi);

 
// saljemo funkciju SOME I ONA nam vraca da li makar jedan
// element ispunjava uslov (true or folse)

// data = [1, 2, 3, 4, 5, 6];
// novi = data.some((el) => {
// return el > -3;
// });
// console.log(novi);


// data = [1, 2, 3, 4, 5, 6];

// novi = data.map((el, i) => {
// if (el > 3) {
//     return 3;
// }
// });
// console.log(novi);


// data = [1, 2, 3, 4, 5, 6];

// a = data.find((el) => {
// return el > 3;
// });
// console.log(a);


// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// parni = data.filter((el) => {
// return el % 2 ===0;
// });
// console.log(parni);
// ispisati sve parne brojeve


// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// parni = data.map((el) => {
// if (el % 2 === 0) {
//     return el;
// }else {
//     return 0;
// }
// });
//gde su neparni brojevi zameniti nulom



// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// novi = data.some((el) => {
// return el > 90;
// });
// console.log(novi);

//da li su svi brojevi veci od broja 90


// function countPositivesSumNegatives(input) {
//     arr = [0,0]
//       input.forEach((el) =>{
//         if (el>0) {
//           arr[0]++
//         }else {
//           arr [1]+=el
//         }
//       })
//     return arr;
//       }