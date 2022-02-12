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


// MAP - PRIMENJUJE NA SVAKU FUNKCIJU ELEMENT I VRACA SVAKI ELEMENT NIZA


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


//(map)
// var osobe = [
//     {ime : "Sara", prezime: "Juka"},
//     {ime : "Lena", prezime: "Pantic"},
//     {ime : "Mina", prezime: "Jovic"}
// ];

// function napraviPunoIme(osoba,index) {
//     var punoIme = [osoba.ime,osoba.prezime].join(" ");
//     return punoIme;
// }
// console.log(osobe.map(napraviPunoIme));



// //(indexOf)
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));

// console.log(beasts.indexOf('bison', 2));


// console.log(beasts.indexOf('giraffe'));


// //(find)
// var korpa = [
//     {imeVoca: 'banana', kolicina: 0},
//     {imeVoca: 'jabuka', kolicina: 2},
//     {imeVoca: 'visnja', kolicina: 5}
// ];

// function daliImaVoca(vocka) {
//     return vocka.kolicina > 0 ;
// }
// var poslastice = korpa.find(daliImaVoca);
// console.log("Korpa nije prazna, ima " + poslastice.imeVoca);



//(forEach)
// nekiNiz.forEach(function (currentValue, index, array) {
//     //neki proracun
// }, [thisArg]);



// var nekiNiz = ['a', 'b', 'c'];

// nekiNiz.forEach(function(element) {
//     console.log(element);
// });
//  //Vraca: "a" "b" "c"


//  var nekiNiz = ['a', 'b', 'c'];

//  nekiNiz.forEach(function(element, index, prosledjen_niz) {
//       console.log(prosledjen_niz[index]);
//  });
//   //Vraca: "a" "b" "c"


//   function callbackFunkcija(element, index, array) {
//     console.log('a[' + index + '] = ' + element);
//   }

//   [2, 5, , 9].forEach(callbackFunkcija);  
//     // Vraća: a[0] = 2   a[1] = 5   a[3] = 9 



//(filter)
// var users = [
//     {
//       "name": "Mina",
//       "age": 20,
//       "email": "mina@gmail.com"
//     },
//     {
//       "name": "Sara",
//       "age": 30,
//       "email": "sara@gmail.com"
//     },
//     {
//       "name": "Jana",
//       "age": 29,
//       "email": "jana@gmail.com"
//     },
//     {
//       "name": "Luka",
//       "age": 19,
//       "email": "luka@gmail.com"
//     }
//   ];

//   // Filtriranje vraca: niz objekata koji zadovoljavaju uslov
//   var sortedByAge = users.filter(function(el){
//       return el.age >= 30;
//   });

//   //Stampanje imena korisnika iz objekata koji su zadovoljili uslov
//   sortedByAge.forEach(function(element) {
//       console.log(element.name);
//   });         // Vraca: "Mina" "Luka"



//(every)
// izvorniNiz.every(function (currentValue, index, array) {
//     //neki uslov
// }, [thisArg]);


// var osobe = [19, 21, 32, 16, 35],
// istinitost = osobe.every(function(item, index, array){
//         return item>=18;
// });    // Vraca True ili False

// if (istinitost){
//    console.log("Svi su punoletni");
// } else {
//    console.log ("Neko nije punoletan!");
// }




//(some)
// const ages = [8, 15, 28, 39];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 28;
// }



// function isNegative(element, index, array) {
//     return element < 0;
//   }

//   const int8 = new Int8Array([-10, 20, -30, 40, -50]);
//   const positives = new Int8Array([10, 20, 30, 40, 50]);

//   console.log(int8.some(isNegative));
//   // expected output: true

//   console.log(positives.some(isNegative));



// function powerOfTwo(n) {
//     pomArr = [];

//     for (let i = 0; i <= n; i++ ) {
//         pomArr.push(2 ** i);
//     }
//     return pomArr;
// }

// rez = powerOfTwo(3);
// rez1 = powerOfTwo(5);
// rez2 = powerOfTwo(10);

// console.log(rez);
// console.log(rez1);
// console.log(rez2);



//  const reverseSeq = n => {
//      const result = [];

//    for(let i = n; i > 0; i -= 1) {
//      result.push(i);
//    }

//    return result;
//  };


//  function reservedSeq(n) {
//           pomArr = [];
//   for (let i = n; i < 0; i--) {
//          pomArr.push(i);

//      }
//       return pomArr;   
//      }
//      rez = reservedSeq(4);
//  console.log();


// function pillars(num_pill, dist, width) {
// for (let i = 1; i < num_pill; i++){
// if(num_pill < 2) {
//     return 0;
//     }
//     return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
//  }
// }


// function pillars(num_pill, dist, width) {
//     if (num_pill <= 1) {
//         return 0;
//     }
//     if (dist < 10 || dist > 30) {
//         return;
//     }
//     if (width < 10 || width > 50) {
//         return;
//     }
//     return (num_pill - 1) * (dist * 100 + width) - width;
// }

// // rez = pillars(2, 20, 25);
// rez = pillars(1, 10, 10);

// console.log(rez);
// console.log(pillars(2, 20, 25));
// console.log(pillars(11, 15, 30));


// function symmetricPoint(p, q) {
//     return [2 * q[0] - p[0], 2 * q[1] - p[1]];
//   }

//   const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);



//function stray(numbers) {

// let strayChar = [];
// for(let i = 1; i < numbers.length; i++) {
//  if(strayChar !== numbers[i]) {
//  return strayChar = numbers[i];
//   }
//   return 0;
// }
// }



// function stray(numbers) {
//     num = 0;

//     if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//         num = numbers[0];
//     }
//     if (numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//         numbers[numbers.length - 1] !== numbers[numbers.lengt - 3]
//         ) {
//             num = numbers[numbers.length - 1];
//         }
//         for (let i = 1; i < numbers.length - 1; i++) {
//             if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {

//             num = numbers[i];
//             break
//         }
// }
// return num;
// }

// console.log(stray([1, 2, 1, 1, 1, 1, 1, 1]));
// console.log(stray([1, 1, 17, 1, 1, 1, 1]));
// console.log(stray([1, 1, 1, 1, 1, 1, 1]));



// function inverseSlice(items, a, b) {
//     pomArr = items.slice(0, a);

//     pomarr2 = items.slice(b);

//     pomArr = pomArr.concat(items.slice(b));

//     return pomArr;
// }

// console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
// console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));

// [12, 14, 55, 24]





// const removeConsecutiveDuplicates = (s) => {
//     pomArr =  s.split(" ");
// let rez = [];
// for (let i = 0; i < s.length; i++) {
// if (pomArr[i] !== pomArr[i + 1]) {
// rez.push(pomArr[i]);
// }
// }
// return rez;
// };

// console.log(removeConsecutiveDuplicates(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gammma gamma gamma delta")
//     );

//     // alpha beta gamma delta alpha beta gamma delta 





// function nbYear(p0, percent, aug, p) {
//     const percentage = percent / 100
//     let result = p0
//     let years = 0 while (result < p) {
//         result += result * percentage + aug years
//     }
//     return years
// }




// function LargestPairSumInArray(arr) {
//     let first, second;
//     if (arr[0] > arr[1]) {
//         first = arr[0];
//         second = arr[1];
//     }
//     else {
//         first = arr[1];
//         second = arr[0];
//     }
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         }
//         else if (arr[i] > second &&
//             arr[i] != first)
//             second = arr[i];
//     }
//     return (first + second);
// }




// const removeConsecutiveDuplicates = (s) => {
//     pomArr = s.split(" ");
//     let rez = [];
//     for (let i = 0; i < s.length; i++) {
//         if (pomArr[i] !== pomArr[i + 1]) {
//             pez.push(pomArr[i]);
//         }
//     }
//     return rez.join(" ");
// };



// function nbYearU(p0, percent, aug, p) {
//     let n = 0;
//     while (p0 < p) {
// p0 = p0 +(p0 * percent) /100 +aug;
// n = n + 1;
//     }
//     return n;
// }



// niz = [11, 13, 4, 21, 18];

// for (let i = 0; i < niz.length; i++) {
//     for (let j = i + 1; j >= 0; j--) {
//         if (niz[j] < niz[j - 1]) {
//             // [niz[j], niz[j - 1]] = [niz[j - 1], niz[j]];
//             let pomVar = niz[j];
//             niz[j] = niz[j - 1];
//             niz[j - 1] = pomVar;
//         } else {
//             break;
//         }
//         }
//     } 


//     console.log(niz(niz.length - 1));
//   console.log(niz(niz.length - 2));




// function addBinary(a, b) {
//     var sum = a + b,
//             binary = '';

//     while ( sum > 0 ) {
//       binary = ( sum % 2 ) + binary;
//       sum = Math.floor( sum / 2 );
//     }

//     return binary;
//   }

//   console.log( addBinary( 1,2 ) ); //Should be 11
//   console.log( addBinary( 51,12 ) ); //Should be 111111
//   console.log( addBinary( 100, 0 ) ); //Should be 1100100




// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


// function addBinary(a,b) {
//   return (a + b).toString(2);
// }



//youdontknowjs
// iife



//OBJEKTI - jedan blok odredjenih varijabli koje imaju svoje vrednosti. 




//   covek1 = {

//   //covek1 =  poajdwiQJFq[dfwjQFWJ;

//     name: "sejla",
//     surname: "calakovic",
//    birhdate: "05.02.2001",
//    // location: "NP",
//    location: "NP",
//    // job = qhw1hawfjdo12i44r
//    function() {
//      console.log("Doing some job");
//    },
//   };


//   covek2 = { ...covek1};


// //covek1 = poajdwiQJFq[dfwjQFWJ
// covek2 = covek1 //poajdwiQJFq[dfwjQFWJ


//   // console.log(covek1);
//   // console.log(covek2);

//    covek2.name = "Novo ime!!!";

//    //console.log("=================================");
//    console.log(covek1);
//    console.log(covek2);


//   // console.log(Object.keys(covek1));
//   // console.log(Object.values(covek2));


//   covek1.job(); //job- pokazivac


// covek1 ={
// name: "sejla",
//     surname: "calakovic",
//    birhdate: "05.02.2001",
//  location: {
//    contry: "SRB",
// city: {
//    cityName : "Novi Pazar",
// postcode: "36300",
//     },
//    },
//   };

//    covek2 = { ...covek1,
//      location: { ...covek1.location, 
//     city: { ...covek1.location.city 
//     },
//   },
//  };

//    covek2.name = "novo ime";

//    console.log(covek1);
//    console.log(covek2);


// covek2.location.city = "VA";


// console.log(covek1);
// console.log("=====================================");
// console.log(covek2);




// var library = [
//   {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
//   }];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }



// var student = {
//   name: "Dvid Rayy",
//   sclaas: "VI",
//   rollno: 12
// };
// console.log(Object.keys(student)); 




// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
// }
// }


// // // c1 = {
// // //   name: "AUDI",
// // //   year: "2010"
// // // }


// c1 = new Car("AUDI", 2010);
// c2 = new Car("Mercedes", 2020);

// console.log(c1);
// console.log(c2);




// class Macka {
// constructor(name, year, hairColor, weight) {
//   this.name = name;
//   this.year = year;
//   this.hairColor =hairColor;
//   this.weight = weight;
// }  
// }
 

// m1 = new Macka("Coco", 2020, "black", "4kg" );
// console.log(m1);

// m2 = new Macka("Cici", 1018, "siva", "2kg" );
// console.log(m2);

// m3 = new Macka("Reri", 2022, "narandzasta", "1,5kg");
// console.log(m3);


// a1 = {
//   name: "Sejla",
//   surname: "Calakovic",
// };

// a2 = {};
// // a2 = {
// //   Sejla: "name",
// //   Calakovic: "surname",
// // };


// console.log(Object.keys(a1));
// console.log(Object.values(a1));
// console.log(Object.entries(a1));


// let flatObj = Object.entries(a1);

// for (let i = 0; i < flatObj.length; i++) {
//   console.log(flatObj[i]);

//  a2[flatObj[i][1]] = flatObj[i][0]; 
// }

// console.log(a1);
// console.log("===========================");
// console.log(a2);



// var student = {
//     name: "David Rayy",
//     sclaas: "VI",
//     rollno: 12,
//   };


//   console.log(Object.keys(student)); 
  


a1 = {
  name: "Sejla",
  location:"NP",
};


function isContainProp(argObj, prop) {
  let props = Object.keys(argObj);

  if (props.includes(prop)) {
    console.log(("sadrzi"));
  }else {
    console.log("ne sadrzi");
  }
}

isContainProp(a1, "name");