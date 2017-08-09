
for (var i = 1; i < 6; i++) {
  console.log( "Hello world! x " + i );
}

console.log()

//THE FOR LOOP

var array1 = []

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array

}

forLoop(array1)

console.log(array1)
console.log()

//---------------

function maybeTrue() {
  return Math.random() >= 0.5 //returns random number between 0 (inclusive) and 1 (exclusive)
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!")
}

console.log()

//---------------

let countdown = 10; //code-along says 100

while (countdown > 0) {
  console.log(countdown--) // post decrementing looks nicer when printed out: 10 to 1 rather then 9 to 0
}

console.log()

// THE WHILE LOOP

function whileLoop(number) {
  let num = number;

  while(num > 0){
    console.log(num--)

  }
  return 'done'

}

whileLoop(7)
console.log()

function maybeTrue2() {
  return Math.random() >= 0.3

}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue2());

console.log()

// --------------- THE DO/WHILE LOOP

function doWhileLoop(array) {
  do {
    array.pop()
    console.log(array)

  } while (array.length >= 0 && maybeTrue2())

  return array

}

var daThing = [1, 'one', 'juan', 'ichi', 2, 'deux', 'dude', 3, 'tree', 'gee']

doWhileLoop(daThing)
