function myDsiplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("error");
  }
});

myPromise.then(
  function (value) {
    myDsiplayer(value);
  },
  function (error) {
    myDsiplayer(error);
  }
);
