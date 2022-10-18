var express = require('express'); 
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/index.html')
});

app.post('/', function(req, res){ 
    const value = req.body.test;
    console.log(value);

    const folder = __dirname + `/files` + `/${value}`; 
    console.log(folder);

});



app.get('/display', function (req, res){
    res.sendFile(__dirname  + '/files/sample.txt')
})


app.listen(3000, function(err){ 
    if (err) {console.error(err);}
    else
	{console.log("Server started at http://localhost:3000"); }
});
