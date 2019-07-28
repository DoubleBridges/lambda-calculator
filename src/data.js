// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

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
