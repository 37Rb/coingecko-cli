const CoinGecko = require('coingecko-api');

if (process.argv[2] !== 'hledger') {
    console.log('Usage: hledger <yyyy-mm-dd> <coin1,coin2,...>');
    process.exit(1);
}

const date = process.argv[3];
let cgdate = date.split('-');
cgdate = cgdate[2] + '-' + cgdate[1] + '-' + cgdate[0];

const coins = process.argv[4].split(',');

const client = new CoinGecko();

const logHledgerPrice = async (date, coinId) => {
    let response = await client.coins.fetchHistory(coinId, {
        date: cgdate
    });
    if (response.success) {
        let symbol = response.data.symbol.toUpperCase();
        if (/\d/.test(symbol)) {
            symbol = '"' + symbol + '"';
        }
        const price = parseFloat(response.data.market_data.current_price.usd).toFixed(2);
        console.log(`P ${date} ${symbol} ${price}`);
    } else {
        console.log(`Error: ${response.message}`);
    }
};

(async () => {
    for (const coin of coins) {
        await logHledgerPrice(date, coin);
    }
})();
