const express = require('express');
const https = require('https');
const app = express();

app.get('/', function (req, res) {
	const url =
		'https://api.openweathermap.org/data/2.5/weather?q=Pembroke Pines&appid=06f9f9e73d2df756b155689adc69139f';
	https.get(url, function (response) {
		console.log(response.statusCode);
		response.on('data', function (data) {
			const weatherData = JSON.parse(data);
			console.log(weatherData);
		});
	});
	res.send('Server is up and running');
});

app.listen(3000, function () {
	console.log('Server running on port 3000');
});
