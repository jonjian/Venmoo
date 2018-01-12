Goal of debugging:
  Get Travis to use our PGdb
  Which means get DATABASE_URL to log the postgres url.
When bug is fixed:
  My first GET users/id test passes

What gets added into .test console.log()

`test` has the same format as the url we're using, but abc, d0ef, hi-j are subbed in for
```
const test = 'postgres://abc:d0ef@hi-j.compute-1.amazonaws.com:5432/dedjj9hcdfiie5'

const testEncoded = encodeURIComponent(test)

const testQuote2 = '"a"'

const testQuote1 = "'a'"

const testBase = 'hello'
```

Add two environment variables hashed using travis encrypt cli

encrypted and unencrypted in .travis.yml
in UI, with and without process.env prefix

cases:
plain text

URL looking thing
coded vs unencoded
no quotes
single quotes
double quotes
'?'
