const runOnce = function () {
  console.log(
    "This should never run again. But, Alas, I can't enforce that. People may call again and again :-("
  );
};

runOnce();

/*

Now if I made it unavailable to other by not giving a name to invoke, JS will give an error.

function () {
    console.log(
      "This should never run again. But, Alas, I can't enforce that. People may call again and again :-("
    );
  };

*/
/*
So, we will wrap it in () to make JS believe that it is an expression. But, now the problem is, it won't get invoked.
*/
(function () {
  console.log(
    "This should never run again. But, Alas, I won't be invoked at all :-("
  );
});

/*
So, lets invoke it by adding () in the end.
*/
(function () {
  console.log("This should never run again. I can't be invoked again :-)");
})();

(() => {
  console.log(
    "This should never run again. I can do this in Arrow functions also :-)"
  );
})();
