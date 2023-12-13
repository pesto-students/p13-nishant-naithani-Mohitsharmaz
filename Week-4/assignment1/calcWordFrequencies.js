function calWordFrequencies(ar) {
  ar = ar.split(" ");
  let frequencyMap = {};

  ar.map((item) => {
    if (frequencyMap[item]) {
      frequencyMap[item] += 1;
    } else {
      frequencyMap[item] = 1;
    }
  });
  console.log(frequencyMap);
  return frequencyMap;
}

let wordArr = "apple banana apple kela kela amrood";
calWordFrequencies(wordArr);
