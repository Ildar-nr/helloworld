console.log('hello world');

тестовое приложение -> ContentController(сайта lexplate)

//http request
var http = require('http');

var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'www.lexplate.ru',
  path: '/ContentController',
  //since we are listening on a custom port, we need to specify it by hand
  //port: '1337',
  //This is what changes the request to a POST request
  method: 'POST',
  //headers: {'custom': 'Custom Header Demo works'}
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};




callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();

///////////////////////////////////////////////////////////////////////
var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.')
  })
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();



























