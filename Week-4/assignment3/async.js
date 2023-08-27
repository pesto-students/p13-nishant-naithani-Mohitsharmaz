const axios = require("axios");
async function getExchangeRate(currencyCode) {
  let url = "https://api.exchangerate.host/latest";
  let data = await axios.get(url);
  // console.log(data)
  let currCode = data?.data?.rates[currencyCode]?.toFixed(4);
  if (currCode) {
    return currCode;
  } else {
    return null;
  }
}
getExchangeRate("dsft")
  .then((rate) => {
    console.log("rate is", rate);
  })
  .catch((err) => {
    console.error(err);
  });
