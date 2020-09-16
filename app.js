const direction = {
    alias: 'd',
    desc: 'city address to get the weather',
    demand: true
}

const argv = require('yargs')
    .option({ direction })
    .argv

console.log(argv.direction);