const getVaccineStats = require('./index')

const results = getVaccineStats().then((result) => console.log(result));