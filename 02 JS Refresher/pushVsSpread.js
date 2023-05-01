let defaultBooks = [
  { title: "The Blind Watchmaker", bookId: "B001" },
  { title: "A random walk down wall street", bookId: "B002" },
  { title: "Arguably", bookId: "B003" },
];

console.log(defaultBooks);

let bookOne = { title: "The Glass Palace", bookId: "B004" };
defaultBooks.push(bookOne);

let bookTwo = { title: "You can win", bookId: "B005" };
defaultBooks.push(bookTwo);

console.log(defaultBooks);
