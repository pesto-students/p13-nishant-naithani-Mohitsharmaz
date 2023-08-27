const divideAr = (ar) => {
  let even = ar.filter((item) => item % 2 === 0);
  let odd = ar.filter((item) => item % 2 !== 0);
  even.sort(function compareNumbers(a, b){return a - b;});
  odd.sort(function compareNumbers(a, b){return a - b;});
  if (even.length) {
    console.log("Even Numbers:");
    even.map((evn) => {
      console.log(evn);
    });
  } else {
    console.log("even Numbers:None", );
  }

  if (odd.length) {
    console.log("odd Numbers:");
    odd.map((odd) => {
      console.log(odd);
    });
  } else {
    console.log("odd Numbers:None");
  }
};

divideAr([2,24,21,33, 4, 6]);
