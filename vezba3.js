
//OBJEKTI - jedan blok odredjenih varijabli koje imaju svoje vrednosti. 
// referentni tip podatka



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



// a1 = {
//   name: "Sejla",
//   location:"NP",
// };


// function isContainProp(argObj, prop) {
//   let props = Object.keys(argObj);

//   if (props.includes(prop)) {
//     console.log(("sadrzi"));
//   }else {
//     console.log("ne sadrzi");
//   }
// }

// isContainProp(a1, "name");




//class Book {
//constructor(title = "", genre, author) {
//       this.title = title;
//       this.genre = genre;
//       this.author = author;
//       this.read = false;
//       this.read_date = null;
//     }
//   }

//   class BookLists {
//     constructor() {
//       this.bookShelf = [];
//       this.booksRead = 0;
//       this.notBooksRead = this.bookShelf.length - this.booksRead;
//       this.nextBook = null;
//       this.currBook = null;
//       this.lastBook = null;
//     }

//     add(book) {
//       if (book instanceof Book) {
//         debugger;
//         this.bookShelf.push(book);

//         for (let i = 0; i < this.bookShelf.length; i++) {
//           if (!this.bookShelf[i].read) {
//             this.currBook = this.bookShelf[i];
//             if (this.bookShelf[i + 1]) {
//               this.nextBook = this.bookShelf[i + 1];
//             } else {
//               this.nextBook = null;
//             }
//             break;
//           }
//         }
//       } else {
//         console.log("Invalid argument type");
//       }
//     }

//     finishCurrentBook() {
//       for (let i = 0; i < this.bookShelf.length; i++) {
//         const book = this.bookShelf[i];
//         if (book.title === this.currBook.title) {
//           this.bookShelf[i].read = true;
//           this.bookShelf[i].read_date = new Date();
//           this.lastBook = this.currBook;
//           this.currBook = this.nextBook;
//           if (this.bookShelf[i + 1]) {
//             this.nextBook = this.bookShelf[i + 2];
//           }
//           break;
//         }
//       }
//     }
//   }

//   b1 = new Book("HP1", "magic", "JKR");
//   b2 = new Book("HP2", "magic", "JKR");
//   b3 = new Book("HP3", "magic", "JKR");
//   b4 = new Book("HP4", "magic", "JKR");
//   b5 = new Book("HP5", "magic", "JKR");

//   bl = new BookLists();

//   bl.add(b1);
//   bl.add(b2);
//   bl.add(b3);
//   bl.add(b4);
//   bl.add(b5);

//   console.log(bl.lastBook);
//   console.log(bl.currBook);
//   console.log(bl.nextBook);

//   bl.finishCurrentBook();

//   console.log("=========================");
//   console.log(bl.lastBook);
//   console.log(bl.currBook);
//   console.log(bl.nextBook);

//   bl.finishCurrentBook();
//   bl.finishCurrentBook();
//   bl.finishCurrentBook();
//   bl.finishCurrentBook();

//   console.log("=========================");
//   console.log(bl.lastBook);
//   console.log(bl.currBook);
//   console.log(bl.nextBook);

//   console.log(bl.bookShelf);





// var Macka = {
//     umor: 0,
//     glad: 0,
//     usamljenost: 0,
//     sreca: 0,
//     igranje: function () {
//         this.glad += 5;
//         this.usamljenost += 5;
//         this.sreca += 20;
//     },
//     jelo: function () {
//         this.glad -= 5;
//         this.sreca += 5;
//     },
//     pet: function () {
//         this.usamljenost -= 5;
//         this.umor += 5;
//     },
//     spavanje: function () {
//         this.umor -= 5;
//     }
// }



//greeting
//apply
//call
//bind

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





