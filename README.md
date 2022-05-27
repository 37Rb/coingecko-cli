# Command line utility to get data from CoinGecko

Currently the only command is one to get price data for hledger. Provide the date and a comma separated listed of CoinGecko API IDs.

```
$ node index.js hledger 2021-12-31 bitcoin,ethereum,api3,sovryn
P 2021-12-31 BTC 47191.87
P 2021-12-31 ETH 3714.95
P 2021-12-31 "API3" 4.43
P 2021-12-31 SOV 10.02
```
