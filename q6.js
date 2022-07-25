// Given an array of 0's and 1's find out number of 0's ?
function Array() {
  let x = [0, 1, 0, 1];
  let length = x.length;
  let Zero = 0;

  for (let i = 0; i < length; i++) {

    if (x[i] == 0) {
      Zero = Zero + 1;
    }
  }
  console.log(Zero);
}
Array()

// Given an array find out total no. of odd and even nos.
function Array() {
  let Y = [1, 3, 4, 5, 6, 7, 8, 9];
  let length = Y.length;
  let Even = 0;
  let Odd = 0;

  for (let i = 0; i < length; i++) {

    if (Y[i] % 2 == 0) {
      Even = Even + 1;
    }
    else {
      (Y[i] % 2 !== 0)
      Odd = Odd + 1;
    }
  }
  console.log(Even);
  console.log(Odd);
}
Array()

// Given a string find out number of vowels 

function countvowels(Check) {
  let vowels = 0;
  Z = (Check.split(''));
  for (let i = 0; i < Z.length; i++) {
    if (Z[i] === "a" || Z[i] === "e" || Z[i] === "i" || Z[i] === "o" || Z[i] === "u") {
      vowels = vowels + 1;
    }
  }
  console.log(vowels);

}
countvowels("vaehsxusgc")

// Write a code to create two objects with 2 properties each, one will be 
// string and other will be an array. Create a function to check if all the 
// elements of the arrays in both the objects are same

let P = { Chicken: "300", Mutton: [600], };
let Q = { Prance: "300", Fish: [200], };

function CheckArray() {
  let length = P.Mutton.length;
  for (i = 0; i < length; i++) {
    if (P.Mutton[i] == Q.Fish[i]) {
   console.log("Arrays Are Equal")
    }
    else {
      console.log("Arrays Are Not Equal")
    }
  }
 
}
CheckArray()


