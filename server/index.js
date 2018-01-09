// import dotenv from 'dotenv';
const path = require('path');
const express =require('express');


// dotenv.config();
// process.env.PORT ||

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
// const indexPath = path.join(__dirname, '../index.html');

// app.get('/', (request, response) => {
//   res.send({'yo'})
// });


app.listen(PORT);
console.log(`Listening on ${PORT}`);
