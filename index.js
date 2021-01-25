const got = require('got');
const { JSDOM } = require('jsdom');
const req_url = 'https://covid19asi.saglik.gov.tr/';

const getVaccineStats = (
    async () => {
        let distributionByProvinces = {};
        try {
            const { body } = await got(req_url);
            const { document } = new JSDOM(body).window;
            for (let i = 1; i <= 81; i++) {
                distributionByProvinces[i] = document.querySelector(`#q${i}q`).textContent.trim();
            }
        } catch (err) {
            console.log(err.response.body);
        }
        return distributionByProvinces;
    }
);

module.exports = getVaccineStats;

