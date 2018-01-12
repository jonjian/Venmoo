// ALEX DEBUG BLOCK START
require('dotenv').config();
const test = 'postgres://abc:d0ef@hi-j.compute-1.amazonaws.com:5432/dedjj9hcdfiie5'
const testEncoded = encodeURIComponent(test)
const testQuote2 = '"a"'
const testQuote1 = "'a'"
const testBase = 'hello'

const  yaml = `
env:
  - TEST=${test}
  - TEST_ENCODED=${testEncoded}
  - TEST_QUOTE1=${testQuote1}
  - TEST_QUOTE2=${testQuote2}
  - TEST_BASE=${testBase}
`


const envNames =['TEST', 'TEST_ENCODED', 'TEST_QUOTE1', 'TEST_QUOTE2','TEST_BASE']
//const envNames = ['DATABASE_URL', 'PORT']
envNames.forEach(x => console.log(process.env[x]))


// ALEX DEBUG BLOCK END
