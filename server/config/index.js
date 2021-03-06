module.exports = {
    title: 'Hovrly',
    isDev: process.argv[2] === 'dev' ? true : false,
    port: 3000,
    donate: {
        btc: {
            address: '16xoW1BcBF6KeSCE1B54dWSpU1QifK4Ew2',
            network: 'BTC',
        },
        eth: {
            address: '0xf3a9f3ec48715880e54146bddf8d3e8e338e0bde',
            network: 'ERC20',
        },
        usdt: {
            address: '0xf3a9f3ec48715880e54146bddf8d3e8e338e0bde',
            network: 'ERC20',
        },
    },
    appVersionUrl: 'https://raw.githubusercontent.com/tarutin/hovrly/master/package.json',
}
