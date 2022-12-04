function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, Myreject) {
  let x = 0;

  if (x == 0) {
    myResolve("ok");
  } else {
    Myreject("error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
