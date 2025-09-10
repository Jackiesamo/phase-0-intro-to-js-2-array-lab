let cats = ['Milo', 'Otis', 'Garfield'];

//1. Appends a cat to the end of the cats array
function destructivelyAppendCat() {
  cats.push("Ralph");
};
destructivelyAppendCat();//Invoking the function
console.log(cats)

// 2. Prepends a cat to the beginning of the cats array
function destructivelyPrependCat() {
  cats.unshift("Bob");//unshift method adds fro the begining
};
destructivelyPrependCat()//invoking a function
console.log(cats)

// 3. Removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop("Ralph");
}
destructivelyRemoveLastCat()//invoking function
console.log(cats)

// 4. Removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift("Bob");
}
destructivelyRemoveFirstCat();
console.log(cats)

// 5. Appends a cat to the cats array and returns a new array
function appendCat(name) {
  return [...cats, name];
}

// 6. Prepends a cat to the cats array and returns a new array
function prependCat(name) {
  return [name, ...cats];
}

// 7. Removes the last cat and returns a new array
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Removes the first cat and returns a new array
function removeFirstCat() {
  return cats.slice(1);
}
