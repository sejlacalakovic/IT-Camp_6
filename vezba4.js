// ASINHRONI JAVASCRIPT - 
// Модел асинхроног програмирања има једну нит кон­троле, унутар које се задаци преплићу. 
// Када се извршава један задатак, може се бити сигуран само да тај задатак извршен. 
// У асинхроном моделу није потребан сложен механизам за комуникацију између нити, па је зато предвидљивији.
// У којим ситацијама је асинхрони модел бољи од синхроног? 
// Када год програм чека нешто - учитавање података са диска, упит према бази података или мрежне захтеве. 
// Ово су све блокирајуће операције. 
// У случајевима када програм има много улаза/излаза из извора као што су учитавање диска или мрежни позиви, 
// кашњење се не може предвидети. У синхроном програму непредвидљивост је „рецепт“ за лошу перформансу. 
// Када се асинхрони програм суочи са блокирајућим задатком, извршава се наредни задатак, без чекања да се блокирајућа операција заврши.


// Пример. Илуструје рад са повратним позивом:

// let povratniPoziv = () => {
//   console.log(`Ziv sam!`)
// }

// console.log(`Pokrenuto...`)
// setTimeout(povratniPoziv, 2000)
// console.log(`Zavrsava...`)





// SIHRONI JAVASCRIPT - 
// Синхрони модел је најстарији и најједноставнији модел про­грамирања.
// Задаци се извршавају сукцесивно, један по један, и тек када се изврши претходни, почиње следећи.
// У синхроном моделу, наредба која следи ће бити извршена тек након што се изврши наредба која њој претходи.
// Ако се догоди да је наредба која претходи скупа и да дуго траје, наредба ће бити бло­кирана, мораће да чека. 
// Ово је озбиљан проблем када се развијају системи високих перформанси.
// Постоји још један проблем код синхроног модела, који се манифестује код корисничког интерфејса. 
// Док програм извршава задатак који може да потраје неко време, нема могућности да се бло­кирају корисници, 
// који могу да уносе нешто у поље за унос док се извршава скупи задатак.
// Са друге стране, не би било добро да се блокиа унос корисника током извршавања скупе операције - 
// захтевни задаци треба да се извршавају у позадини.







// const data = { a: 1, b: 2 };

// console.log(Object.entries(data));



// function without(data, prop) {
//     delete data[prop];
// return data;
// }

// console.log(without({ a: 1, b: 2 }, "b"));



// const b = ["a", "b"];

// const a = {
//     name: "a",
//     class: "b"
// };

// console.log(a.class);

// console.log(a["class"]);



// const b = { a: 1, b: 2};

// delete b.b;
// console.log(b);

// zadatak mozemo resiti pomocu ova tri nacina.



// var library = [
//     {
//         age: 29,
//     },

//     {
//         age: 14,
//     },

//     {
//         age: 25,
//     },
//     {
//         age: 19,
//     },

//     {
//         age: 12,
//     }
// ]
// function godine(arr) {
//     res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age < 18) {
//             res.push(arr[i]);
//     }
// }
//     return res  
// }

// console.log(godine(library));




// function wash(callback) {
//     setTimeout(function() {
//         console.log("wash");
//         callback();
//      }, 3000);
// }

// function dry(callback) {
//     setTimeout(function() {
//         console.log("dry");
//         callback();
//      }, 2000);
// }


// function fold(callback) {
//     setTimeout(function() {
//         console.log("fold");
//         callback();
//      }, 1000);
// }


// function doLaundry(actions) {
//     actions[0] (() => {

//         actions[1] (() => {
//             actions[2] (() => {
//                 console.log("Done");
//             })
//         })
//     })
// }
// doLaundry([wash, dry, fold]);





// Sinhronično ,
//  u kojem se skripta zaustavlja i čeka server da pošalje odgovor prije nego nastavi.


// Asinhrono ,
//  u kojem skripta omogućuje da se stranica nastavi sa procesiranjem i rukuje odgovorom ako i kada stigne.



// function now() {
//     return 21;
//    }
//    function later() {
//     answer = answer * 2;
//     console.log( “Smisao života je:”, answer );
//    }
//    var answer = now();
//    setTimeout( later, 1000 ); 
//    // Smisao života je: 42
//   // Ovaj program se sastoji od dva dela: dela koji se izvršava sada i dela koji će se izvršiti
//    //kasnije. Trebalo bi da bude prilično jasno koji su to delovi, ali bićemo sasvim eksplicitni:

//    Sada:
//    function now() {
//     return 21;
//    }
//    function later() { .. }
//    var answer = now();
//    setTimeout( later, 1000 );
//    Kasnije:
//    answer = answer * 2;
//    console.log( “Smisao života je:”, answer );



//  var peoples = [
//         {
//            author: "bill gates"
//         },

//         {
//          author: "steve jobs"
//         },

//         {
//           author: "suzanne collins"
//         },
//         {
//            author: "bill gates"
//         },

//         {
//            author: "steve jobs"
//         }
//     ]

//     peoples.forEach((el) => {
//         console.log(el.author);
//     });



// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
// const evenNumbers = [];


// numbers.forEach((el) => {
//     if (el % 2 === 0) {
//     evenNumbers.push(el);
//     }

// });

// console.log(evenNumbers);




// let str = "tHE qUIKk brOWN FOx"

// a = str.split("");

// newStr = "";

// a.forEach((char, i ) => {
//     if (i % 2 === 0) {
//         newStr += char.toLowerCase()
//     }else {
//         newStr += char.toLowerCase()
//     }
// });
// console.log(newStr);



// data = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let counter = 0;

// data.forEach((el) => {
// if (!el) {
//     counter ++;
// }
// });
// console.log(counter);




// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
//  console.log(persons);




//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   };





//map - koristimo kad hocemo da uradimo nesto na svim elementima, pravi novi niz sa istim brojem el, 
//koliko ima el u stari niz , toliko mora da ima i unovi niz, izdvaja neke elemente iz niza


//filter - pravi novi niz, popunjava ga elementima koji ispunjavju uslov


//foreach - kada nesto treba da pomnozimo, podelimo




// const cars = ["BMW", 123, false, "Sab", 12.5, "Jps jedan element"]

// arr1 = cars.map((el) => {
// return el + "novi el"
// });

// console.log(arr1);



//const cars = ["BMW", 123, false, "Sab", 12.5, "Jps jedan element"]

// arr1  = cars.map((el) => {
// if (typeof el === "number") {
//     return el;
// }
// });

// arr2  = cars.map((el) => {
//     if (typeof el === "number") {
//         return el;
//     }
// });
// console.log(arr1);
// console.log(arr2);




// some - da li makar jedan el u nizu ispunjava dati uslov

// arr1 = [1, 2, 3, 4, 5, 5, 7, 6, 5, 5, 5, 5, 5];


// res = arr1.some((el) => {
// return el > 6;
// });



// //every - da svaki element ispuni uslov

// res2 = arr1.every((el) => {
//     return el > 0;
//     });

// // console.log(arr1);
// // console.log(res);
// // console.log(res2);

// if (
//     !arr1.every((el) => {
//         return el < 1
//     })
// ) {
//     console.log("ne ispunjavaju svi elementi dati uslov");
// }else {
//     console.log("ispunjavaju svi elementi dati uslov");
// }





// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4


// const sumWithInitial = array.reduce((previousValue, currentValue) => {
//     if (currentValue % 2 === 0) {
//         return previousValue + 1;
//     } else {
//         return previousValue;
//     }
// }, 0);

// console.log(sumWithInitial);
// // expected output: 10




// function findMissing(arr1, arr2) {
//     arr2.forEach((el) => {
//         if (arr1.includes(el)) {
//             arr1.splice(arr1.indexOf(el), 1);
//         }
//     });

//     return arr1[0];
// }

// res = findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
// res2 = findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);

// console.log(res);
// console.log(res2);

// console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]),);





// const heros = [
//     { name: "Spider Man"    },
//     { name: "Thor"          },
//     { name: "Black Panther" },
//     { name: "Captain Marvel"},
    
// ];

// const heros2 = heros.map((el, index) => {
//     return {
//         id:index,
//         hero: el.name,
//     };
// });

// console.log(heros2);






// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
  
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );



// objekat promise - predstavlja konacni kraj ili neuspeh asinhrone operacije i njenu konacnu vrednost.


// Funkcija resolve() se poziva u delu koda koji obradjuje uspešno završenu asinhronu operaciju. 
// Parametar ove funkcije predstavlja dobijeni podatak iz uspešno završene operacije,
// stoga se funkcija resolve() koristi da kroz svoj parametar prosledi rezultujući podatak 
// odgovarajućoj “handler” metodi npr. then() ili Promise.all()…

// Funkcija “reject()” se poziva u delu koda koji obradjuje slučaj kada se pojavi problem sa 
// izvršavanjem asinhrone operacije. Ona kroz svoj parametar prosledjuje razlog neuspešnosti
// asinhrone operacije odgovarajućem “hendleru”, najčešće catch() metodi.




// promise može nalaziti u jednom od tri stanja:

// 1.Pending – kada se asinhrona radnja još uvek izvršava
// 2.Fulfill – kada je asinhrona radnja završena uspešno
// 3.Reject – kada je asinhrona radnja neuspešno završena greškom


// Ceo promise mehanizam se može podeliti na dva dela:

// 1.Kreiranje promisa unutar asinhrone funkcije
// 2.Korišćenje kreiranog promisa (kod se nalazi izvan asinhrone funkcije)
// 3.Kreiranje promisa


// Promise reaguje na promenu svoga stanja pozivajući callback funkciju. 
// Ukoliko je nakon promene stanja promise u stanju fullfiled poziva se metoda then(). 
// Ova metoda prihvata dva parametra “onReslove” i “onRejected” koji su tipa funkcije.


// Ukoliko je nakon promene stanja, promise u stanju rejected, poziva se metoda catch().





// Promise.resolve()
// Promise.resolve(value) je metoda koja pravi promise od drugačijih tipova. 
// Može da primi tri različita tipa kao parametar, nakon čega vraća promise:

// Promise.resolve(vrednost)
// Kada se ovoj metodi prosledi neka vrednost, ta vrednost će biti prosledjena then() funkciji 
// kroz njen parametar.


// Promise.resolve(drugiPromise)
// Kada se prosledi neki drugi promise tada se kroz parametar metode then() prosledjuje 
// eventualno stanje prihvaćenog promise objekta. Ovo je najčešći slučaj,
// jer se koristi za konvertovanje promisa kreiranih od strane drugih biblioteka.





// Promise.all(iterable) kao parametar uzima iterabilnu listu promise objekata.
// Promise.all() metod vraća jedan promise u trenutku kada su svi promisi sa liste uspešno rešeni.
// Promise.all() metoda će vratiti “promis”, čak i kada joj se prosledi prazna lista ili element 
// koji nije promise (pogledaj primer). Kod ove metode redosled izvršavanja liste promisa nije zagarantovan, 
// jedino je zagarantovano da će vratiti krajnji “promis”, kada svi promisi sa liste budu fullfiled.






// Promise.race()

// Promise.race(iterable) je metoda koja takodje kao parametar uzima iterabilnu listu promise
// objekata a vraća obećanje. Ova metoda vraća rezultat koji “stigne prvi”, 
// nebitno da li je uspešan ili ne. Pa tako može biti vraćen promise ili 
// sa krajnjim podatkom kod uspešno izvršene asinhrone operacije ili sa razlogom za neuspešnu operaciju.



//promise: all, race, allSettled

// async



// function job() {
//   return "hello world"
// }

// let mypromise = new Promise ((reslove, reject) => {
//   let res = job();
//   setTimeout(reslove(res), 2000);
// });

// mypromise.then((val) => {
// console.log(val);
// });



// (function () {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("hello world")
//     }, 2000);
//   });
// }) ().then((res) => {
//   console.log(res);
// });





//promise.all()

// var p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'one');
//   });
//   var p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'two');
//   });
//   var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'three');
//   });
//   var p4 = new Promise((resolve, reject) => {
//     reject('Ovaj promise je namerno odbijen');
//   });
//   var p5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, 'five');
//   });
  
//   Promise.all([p1, p2, p3, p4, p5]).then(values => {
//     console.log(values);
//   }).catch(reason => {
//     console.log("Nama svih sastojaka", reason);
//   });  // Vraća: "Ovaj promise je namerno odbijen"




//promise.race()

// var p1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, "one");
// });
// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // "two"
//   // Both resolve, but p2 is faster
// });

// //-----------------------------------------------------
// var p3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, "three");
// });
// var p4 = new Promise(function(resolve, reject) {
//   setTimeout(reject, 500, "four");
// });

// Promise.race([p3, p4]).then(function(value) {
//   console.log(value); // "three"
//   // p3 is faster, so it resolves
// }, function(reason) {
//   // Not called
// });
// //-----------------------------------------------------
// var p5 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, "five");
// });
// var p6 = new Promise(function(resolve, reject) {
//   setTimeout(reject, 100, "six");
// });

// Promise.race([p5, p6]).then(function(value) {
//   // Not called
// }, function(reason) {
//   console.log(reason); // "six"
//   // p6 is faster, so it rejects
// });





// fetch("https://catfact.ninja/facts")
// .then((response) => {
//     return response.json()
// })
// .then((response) => {
//     console.log(response);
// })


//  fetch("https://catfact.ninja/factss")
//  .then((response) => {
//      return response.json()
//  })
//  .then((response) => {
//      console.log(response)
//  })
// .catch((err) => {
//     console.log("greska sa serverom");
// })

//IZBACUJE GRESKU


// async function resp() {
//   const res = await fetch("https://catfact.ninja/facts");
//   const conJ = await res.json();
//   console.log(conJ);
// }
// resp();

// async function resp() {
//   try {
//     const res = await fetch("https://catfact.ninja/facts");
//     const conJ = await res.json();
//     console.log(conJ);
//   } catch (err) {
//     console.log("greska");
//   }
// }
// resp();

// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const convJ = await response.json();
//     //pretvaramo ga u njen body
//     console.log(convJ);
//   } catch (err) {
//     console.log("error");
//   }
// }
// getData();



//closures

var e = 10;
function sum(a) {
    return function (b) {
return function (c) {
    return function (d) {
return a + b + c +d + e
    }
}
    }
}


f1 = sum(1)
f2 = f1(2)
f3 = f2(3)
res = f3(4)


console.log(res);

console.log(sum(1)(2)(3)(4));


for (var i = 0; i < 3; i++) {
    //   function fn() {
    //     console.log(i);
    //   }
    //   setTimeout(fn, 200);
    // }

    //petlja se okrece i u zadnjem pozivanju petlje i bude 3
    //zbog asinh js se 3 puta ispisuje we Api
    //ako stavimo let obuhvata samo ovaj deo:
    // //function fn() {
    //     console.log(i);
    //   }
   
    
    //scope clouser objekt niz hoistinh iife
    // call back async await
    //varijable event loop web api
    //producthunt.com/post/javascript-knowleage-map
    //learnjavascript.online/knowledge-map.html
    //paginacija

