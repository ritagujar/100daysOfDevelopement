// Classes in ES6

class Person {
  constructor(name, birthYear) {
    (this.name = name), (this.yearOfBirth = birthYear);
  }

  getDetails = () => {
    return `Name: ${this.name} and Age: ${2021 - this.yearOfBirth}`;
  };
}

var john = new Person("John", 2001);
// console.log(john.getDetails());

// Inheritance in ES6

class Pilot extends Person {
  constructor(name, birthYear, exp, type, licence) {
    super(name, birthYear);
    (this.experience = exp), (this.type = type), (this.licence = licence);
  }

  getData = () => {
    console.log(
      ` ${this.getDetails()} and Experience ${this.experience} and Type: ${
        this.type
      }`
    );
  };
}

const Doe = new Pilot("Will Smith", 1998, 28, "private", "TC1234");
Doe.getData();
console.log(Doe);

// also we can create multiple objects

const toto = new Pilot("Toto Walf", 2001, 20, "Private", "TC123");
console.log(toto);

// CallBack and Async Operations

// $.get("https://jsonplaceholder.typicode.com/posts", (response) => {
//   console.log(response);

//   const id = 1;
//   $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
//     console.log(response);

//     $.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//       (response) => {
//         console.log(response);
//       }
//     ).fail((err) => {
//       console.log(err);
//     });
//   }).fail((err) => {
//     console.log(err);
//   });
// }).fail((err) => {
//   console.log(err);
// });

// Above as we saw when we make callback inside callback code look more messy and unreadable so here we can use promises

// then() method is called when the resolve() is executed. It receives data passed in the resolve() method as argument

// catch() method is called when the reject() method is executed. It receives the data passed in the reject() method as argument

const postListPromise = new Promise((resolve, reject) => {
  $.get("https://jsonplaceholder.typicode.com/posts/${id}/comments", (data) => {
    // console.log("GET POST List reponse -> ", data);
    resolve(data);
  }).fail((err) => {
    reject(new Error("Call failed for GET POST List Request with status"));
  });
});

// Chaining promises

const postDetailsPromise = (data) =>
  new Promise((resolve, reject) => {
    $.get(
      `https://jsonplaceholder.typicode.com/posts/${data[0].id}`,
      (data) => {
        resolve(data);
      }
    ).fail((err) => {
      reject(`DETAILS CALL FAILED and Status ${data.status}`);
    });
  });

// Whatever we pass to resolve() function it is paased to .then()
// postListPromise
//   .then((response) => {
//     console.log("Call Success");
//     console.log(response);
//   })
//   .catch((error) => {
//     // Whatever we pass to fail() function it is paased to .catch()
//     console.log("Call Failed");
//     console.log(error);
//   });

// For Chaining of promise

postListPromise
  .then((response) => postDetailsPromise(response))
  .catch((error) => {
    console.log("Call Failed");
    console.log(error);
  });
