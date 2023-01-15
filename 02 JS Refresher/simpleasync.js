function resolveInTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
    console.log("Hello");
  });
}

console.log(resolveInTwoSeconds());
