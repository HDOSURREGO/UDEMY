const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/bmicalculator', function (req, res) {
	const weight = req.body.weight;
	const height = req.body.height;

	const bmi = weight + height;

	res.send('Your BMI is ' + bmi);
});

app.listen(3000, function (req, res) {
	console.log('Server running on port 3000');
});
