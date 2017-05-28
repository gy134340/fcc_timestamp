/**
 * this is for fcc_timestamp
 */

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var moment = require('moment');

var app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.set('port', 8080);

app.listen(app.get('port'), function() {
	console.log('server is running', app.get('port'))
});	


// req.hostname
// req.ip


app.get('/:time', function(req, res) {
	// var tmp = (!!moment.unix(req.params.time)) ? 
	// 			moment.unix(req.params.time) :
	// 			req.params.time;
		
	var tmp;
	if (moment.unix(req.params.time).isValid()) {
		tmp = moment.unix(req.params.time);
	} else {
		tmp = req.params.time;
	}

	// var unix = moment.unix(req.params.time);
	// var natural = moment(unix).format('MMMM DD, YYYY');

	// 大日期
	// var unix = moment(req.params.time).unix();
	// var natural = moment(req.params.time).format('MMMM DD, YYYY');
	var unix = moment(tmp).unix();
	var natural = moment(tmp).format('MMMM DD, YYYY');
	var obj = {
		unix: unix,
		natural: natural,
	}
	res.json(obj);
});



