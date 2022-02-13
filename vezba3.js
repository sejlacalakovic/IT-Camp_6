
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




class Book {
    constructor(title = "", genre, author) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = false;
      this.read_date = null;
    }
  }
  
  class BookLists {
    constructor() {
      this.bookShelf = [];
      this.booksRead = 0;
      this.notBooksRead = this.bookShelf.length - this.booksRead;
      this.nextBook = null;
      this.currBook = null;
      this.lastBook = null;
    }
  
    add(book) {
      if (book instanceof Book) {
        debugger;
        this.bookShelf.push(book);
  
        for (let i = 0; i < this.bookShelf.length; i++) {
          if (!this.bookShelf[i].read) {
            this.currBook = this.bookShelf[i];
            if (this.bookShelf[i + 1]) {
              this.nextBook = this.bookShelf[i + 1];
            } else {
              this.nextBook = null;
            }
            break;
          }
        }
      } else {
        console.log("Invalid argument type");
      }
    }
  
    finishCurrentBook() {
      for (let i = 0; i < this.bookShelf.length; i++) {
        const book = this.bookShelf[i];
        if (book.title === this.currBook.title) {
          this.bookShelf[i].read = true;
          this.bookShelf[i].read_date = new Date();
          this.lastBook = this.currBook;
          this.currBook = this.nextBook;
          if (this.bookShelf[i + 1]) {
            this.nextBook = this.bookShelf[i + 2];
          }
          break;
        }
      }
    }
  }
  
  b1 = new Book("HP1", "magic", "JKR");
  b2 = new Book("HP2", "magic", "JKR");
  b3 = new Book("HP3", "magic", "JKR");
  b4 = new Book("HP4", "magic", "JKR");
  b5 = new Book("HP5", "magic", "JKR");
  
  bl = new BookLists();
  
  bl.add(b1);
  bl.add(b2);
  bl.add(b3);
  bl.add(b4);
  bl.add(b5);
  
  console.log(bl.lastBook);
  console.log(bl.currBook);
  console.log(bl.nextBook);
  
  bl.finishCurrentBook();
  
  console.log("=========================");
  console.log(bl.lastBook);
  console.log(bl.currBook);
  console.log(bl.nextBook);
  
  bl.finishCurrentBook();
  bl.finishCurrentBook();
  bl.finishCurrentBook();
  bl.finishCurrentBook();
  
  console.log("=========================");
  console.log(bl.lastBook);
  console.log(bl.currBook);
  console.log(bl.nextBook);
  
  console.log(bl.bookShelf);