const express = require("express");
const app = express();


const PORT = 1337

app.get('/', (req, res) => {
console.log('GET /');
res.send('Yes I am working')
})

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})


