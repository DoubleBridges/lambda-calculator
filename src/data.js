// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = [
  {
    char: "1",
    value: 1,
    class: "btn1"
  },
  {
    char: "2",
    value: 2,
    class: "btn2"
  },
  {
    char: "3",
    value: 3,
    class: "btn3"
  },
  {
    char: "4",
    value: 4,
    class: "btn4"
  },
  {
    char: "5",
    value: 5,
    class: "btn5"
  },
  {
    char: "6",
    value: 6,
    class: "btn6"
  },
  {
    char: "7",
    value: 7,
    class: "btn7"
  },
  {
    char: "8",
    value: 8,
    class: "btn8"
  },
  {
    char: "9",
    value: 9,
    class: "btn9"
  },
  {
    char: "0",
    value: 0,
    class: "btn0"
  },
  {
    char: ".",
    value: '.',
    class: "decBtn"
  },
];

export const operators = [
  {
    char: "/",
    value: "/",
    class: "remainderBtn"
  },
  {
    char: "x",
    value: "*",
    class: "prodBtn"
  },
  {
    char: "-",
    value: "-",
    class: "subBtn"
  },
  {
    char: "+",
    value: "+",
    class: "addBtn"
  },
  {
    char: "=",
    value: "=",
    class: "calculateBtn"
  }
];

export const specials = [
  {
    char: "C",
    class: "clearBtn"
  },
  {
    char: "+/-",
    class: "inverseBtn"
  },
  {
    char: "%",
    class: "percentBtn"
  }
];