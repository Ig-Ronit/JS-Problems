for (var i = 0; i < 3; i++) {
  console.log('hello : ' + i)
  setTimeout(function () {
    console.log('settimeout : ' + i);
  }, 0);
  Promise.resolve().then(() => {
    console.log('promise : ' + i);
  });
}
//guess the output