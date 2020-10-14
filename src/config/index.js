module.exports = {
    title: 'Hovrly',
    isDev: window.location.hostname === 'localhost' ? true : false,
    api: window.location.hostname === 'localhost' ? 'http://localhost:3000' : '',
}
