console.log('server running');

var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server, {log: false}),
    jade = require('jade');

var port = Number(process.env.PORT || 5000);

server.listen(port);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
    res.render('home.jade');
});

var requestAnimFrame = (function () {
    //    return  window.requestAnimationFrame ||
    //        window.webkitRequestAnimationFrame ||
    //        window.mozRequestAnimationFrame ||
    return function (callback) {
        setTimeout(callback, 1000 / 60);
    };
})();

//        io.sockets.emit('updatePlanets', {pa: planetsArray, dpIds: destroyedPlayerIds});


io.sockets.on('connection', function (s) {
    s.on('gyroMove', function (data) {
        s.broadcast.emit('move', data);
    });

//    s.on('motionMove', function (data) {
//        s.broadcast.emit('move', data);
//    });

    console.log('new connection');
});