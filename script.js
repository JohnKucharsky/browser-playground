debugger;

Array.prototype.customSplice = function (startIndex, deleteCount) {
  let array = this;
  let endIndex = startIndex + deleteCount;

  let itemsBeforeSplice = []; // array till startIndex
  let splicedItems = []; // removed items array
  let itemsAfterSplice = []; // array from endIndex

  for (let i = 0; i < array.length; i++) {
    if (i < startIndex) {
      itemsBeforeSplice.push(array[i]);
    }
    if (i >= startIndex && i < endIndex) {
      splicedItems.push(array[i]);
    }
    if (i >= endIndex) {
      itemsAfterSplice.push(array[i]);
    }
  }

  // Insert all arguments/parameters after numItems
  for (let i = 2; i < arguments.length; i++) {
    itemsBeforeSplice.push(arguments[i]);
  }

  // Combine before/after arrays
  let remainingItems = itemsBeforeSplice.concat(itemsAfterSplice);

  // Rewrite array
  for (
    let i = 0, len = Math.max(array.length, remainingItems.length);
    i < len;
    i++
  ) {
    if (remainingItems.length > i) {
      array[i] = remainingItems[i];
    } else {
      array.pop();
    }
  }

  return splicedItems;
};

const months = ["Jan", "March", "April", "June"];
months.customSplice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// ["Jan", "Feb", "March", "April", "June"]

months.customSplice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]

// Remove 0 (zero) elements before index 2, and insert "drum"
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.customSplice(2, 0, "drum");
console.log({ myFish, removed });
// myFish: [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
// removed: []

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish1.customSplice(2, 0, "drum", "guitar");
console.log({ myFish1, removed1 });
// myFish1: [ 'angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon' ],
// removed1: []

// Remove 0 (zero) elements at index 0, and insert "angel"
// splice(0, 0, ...elements) inserts elements at the start of
// the array like unshift().
const myFish2 = ["clown", "mandarin", "sturgeon"];
const removed2 = myFish2.customSplice(0, 0, "angel");
console.log({ myFish2, removed2 });
// myFish2: [ 'angel', 'clown', 'mandarin', 'sturgeon' ], removed2: []

// Remove 0 (zero) elements at last index, and insert "sturgeon"
// splice(array.length, 0, ...elements) inserts elements at the
// end of the array like push().
const myFish3 = ["angel", "clown", "mandarin"];
const removed3 = myFish3.customSplice(myFish.length, 0, "sturgeon");
console.log({ myFish3, removed3 });
// myFish3: [ 'angel', 'clown', 'mandarin', 'sturgeon' ], removed3: []

// Remove 1 element at index 3
const myFish4 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed4 = myFish4.customSplice(3, 1);
console.log({ myFish4, removed4 });
// myFish4: [ 'angel', 'clown', 'drum', 'sturgeon' ],
// removed4: [ 'mandarin' ]

// Remove 1 element at index 2, and insert "trumpet"
const myFish5 = ["angel", "clown", "drum", "sturgeon"];
const removed5 = myFish5.customSplice(2, 1, "trumpet");
console.log({ myFish5, removed5 });
// myFish5: [ 'angel', 'clown', 'trumpet', 'sturgeon' ],
// removed5: [ 'drum' ]

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
const myFish6 = ["angel", "clown", "trumpet", "sturgeon"];
const removed6 = myFish6.customSplice(0, 2, "parrot", "anemone", "blue");
console.log({ myFish6, removed6 });
// myFish6: [ 'parrot', 'anemone', 'blue', 'trumpet', 'sturgeon' ],
// removed6: [ 'angel', 'clown' ]

// Remove 2 elements, starting from index 2
const myFish7 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed7 = myFish7.customSplice(2, 2);
console.log({ myFish7, removed7 });
// myFish7: [ 'parrot', 'anemone', 'sturgeon' ],
// removed7: [ 'blue', 'trumpet' ]

// Remove 1 element from index -2
// problem with polyfill
const myFish8 = ["angel", "clown", "mandarin", "sturgeon"];
const removed8 = myFish8.splice(-2, 1);
console.log({ myFish8, removed8 });
// myFish8: [ 'angel', 'clown', 'sturgeon' ], removed8: [ 'mandarin' ]

// Remove all elements, starting from index 2
// problem with polyfill
const myFish9 = ["angel", "clown", "mandarin", "sturgeon"];
const removed9 = myFish9.splice(2);
console.log({ myFish9, removed9 });
// myFish9: [ 'angel', 'clown' ], removed9: [ 'mandarin', 'sturgeon' ]