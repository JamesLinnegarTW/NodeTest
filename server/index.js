const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (request, response) => response.send('Hello World'));
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.log(`App Started listining on port ${PORT}`));
