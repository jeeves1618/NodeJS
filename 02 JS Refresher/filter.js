let defaultBooks = [
  { title: "The Blind Watchmaker", bookId: "B001" },
  { title: "A random walk down wall street", bookId: "B002" },
  { title: "Arguably", bookId: "B003" },
  { title: "Indian Trillogy", bookId: "B004" },
];

console.log(defaultBooks);

const bookToBeDeleted = "Indian Trillogy";

let updatedList = defaultBooks.filter((book) => book.title != bookToBeDeleted);

console.log(updatedList);

/*
Above Console log will result in

[
  { title: 'The Blind Watchmaker', bookId: 'B001' },
  { title: 'A random walk down wall street', bookId: 'B002' },
  { title: 'Arguably', bookId: 'B003' }
]

*/
