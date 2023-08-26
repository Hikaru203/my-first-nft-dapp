var myHeaders = new Headers();
myHeaders.append("x-api-key", "20CcwuFeQOIcfuHx");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "network": "devnet",
  "marketplace_address": "5p4Bua5tSsSo1RJ94H1w5DiMSPfWcvMvnMVjPpZ6sJUb",
  "nft_address": "9A75AztajAwN9wTkg1BsC6xDEzC8pgjidtjnURQS5CZy",
  "price": 200,
  "seller_wallet": "AaYFExyZuMHbJHzjimKyQBAH1yfA9sKTxSzBc6Nr5X4s"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.shyft.to/sol/v1/marketplace/list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));