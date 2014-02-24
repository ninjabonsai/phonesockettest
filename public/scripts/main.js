(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('phoneSocketTest', []);

require('./controllers/main-controller');
require('./directives/phone-control-directive');
},{"./controllers/main-controller":2,"./directives/phone-control-directive":3}],2:[function(require,module,exports){
angular.module('phoneSocketTest').controller('mainCtrl', ['$scope', '$log', function ($scope, $log) {
    $log.log('mainCtrl');
}]);
},{}],3:[function(require,module,exports){
angular.module('phoneSocketTest').directive('phoneControl', ['$log', function ($log) {
    return {
        link: function (scope, el, attr) {
            var socket = io.connect();

            var gammaTarget = 0,
                gammaTarget2 = 0;

            var betaTarget = 0,
                betaTarget2 = 0;

            //            var xTarget = 0,
            //                xTarget2 = 0;
            //
            //            var yTarget = 0,
            //                yTarget2 = 0;

            var w = window.innerWidth,
                h = window.innerHeight;

            socket.on('move', function (data) {
                //                xTarget += data.x * 5;
                //                yTarget += data.y * -5;

                gammaTarget = h * Math.min(Math.max(((data.gamma + 45) / 90), 0), 1);
                betaTarget = w * Math.min(Math.max(((data.beta + 45) / 90), 0), 1);
            });

            function init() {

                $log.log('init');

                if (window.DeviceOrientationEvent) {
                    window.addEventListener('deviceorientation', sendOrientationData);
                }

                window.addEventListener('resize', resizeEvent);

                //                if (window.DeviceMotionEvent) {
                //                    window.addEventListener('devicemotion', sendMotionData);
                //                }
            }

            function resizeEvent(event) {
                w = window.innerWidth;
                h = window.innerHeight;
            }

            //            function sendMotionData(event) {
            //                socket.emit('motionMove', {x: event.accelerationIncludingGravity.x, y: event.accelerationIncludingGravity.y, z: event.accelerationIncludingGravity.z});
            //            }

            function sendOrientationData(event) {
                socket.emit('gyroMove', {alpha: event.alpha, beta: event.beta, gamma: event.gamma});
            }

            init();

            window.requestAnimFrame = (function () {
                return  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();

            function tick() {
                gammaTarget2 += (gammaTarget - gammaTarget2) * .22;
                betaTarget2 += (betaTarget - betaTarget2) * .22;

                $(el).css('top', gammaTarget2 + 'px');
//                $(el).css('top', betaTarget2 + 'px');

                //                xTarget2 += (xTarget - xTarget2) * .11;
                //                yTarget2 += (yTarget - yTarget2) * .11;
                //
                //                $(el).css('left', 'calc(50% + ' + xTarget2 + 'px)');
                //                $(el).css('top', 'calc(50% + ' + yTarget2 + 'px)');

                requestAnimFrame(tick);
            }

            tick();
        }
    }
}]);
},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcmljaGFyZHJvZ2Vycy9Eb2N1bWVudHMvdGVzdGluZy9waG9uZXNvY2tldHRlc3Qvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9yaWNoYXJkcm9nZXJzL0RvY3VtZW50cy90ZXN0aW5nL3Bob25lc29ja2V0dGVzdC9wdWJsaWMvc2NyaXB0cy9uZy9hcHAuanMiLCIvVXNlcnMvcmljaGFyZHJvZ2Vycy9Eb2N1bWVudHMvdGVzdGluZy9waG9uZXNvY2tldHRlc3QvcHVibGljL3NjcmlwdHMvbmcvY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLmpzIiwiL1VzZXJzL3JpY2hhcmRyb2dlcnMvRG9jdW1lbnRzL3Rlc3RpbmcvcGhvbmVzb2NrZXR0ZXN0L3B1YmxpYy9zY3JpcHRzL25nL2RpcmVjdGl2ZXMvcGhvbmUtY29udHJvbC1kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJhbmd1bGFyLm1vZHVsZSgncGhvbmVTb2NrZXRUZXN0JywgW10pO1xuXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW4tY29udHJvbGxlcicpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL3Bob25lLWNvbnRyb2wtZGlyZWN0aXZlJyk7IiwiYW5ndWxhci5tb2R1bGUoJ3Bob25lU29ja2V0VGVzdCcpLmNvbnRyb2xsZXIoJ21haW5DdHJsJywgWyckc2NvcGUnLCAnJGxvZycsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2cpIHtcbiAgICAkbG9nLmxvZygnbWFpbkN0cmwnKTtcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgncGhvbmVTb2NrZXRUZXN0JykuZGlyZWN0aXZlKCdwaG9uZUNvbnRyb2wnLCBbJyRsb2cnLCBmdW5jdGlvbiAoJGxvZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcbiAgICAgICAgICAgIHZhciBzb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cbiAgICAgICAgICAgIHZhciBnYW1tYVRhcmdldCA9IDAsXG4gICAgICAgICAgICAgICAgZ2FtbWFUYXJnZXQyID0gMDtcblxuICAgICAgICAgICAgdmFyIGJldGFUYXJnZXQgPSAwLFxuICAgICAgICAgICAgICAgIGJldGFUYXJnZXQyID0gMDtcblxuICAgICAgICAgICAgLy8gICAgICAgICAgICB2YXIgeFRhcmdldCA9IDAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB4VGFyZ2V0MiA9IDA7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICB2YXIgeVRhcmdldCA9IDAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB5VGFyZ2V0MiA9IDA7XG5cbiAgICAgICAgICAgIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgc29ja2V0Lm9uKCdtb3ZlJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB4VGFyZ2V0ICs9IGRhdGEueCAqIDU7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgeVRhcmdldCArPSBkYXRhLnkgKiAtNTtcblxuICAgICAgICAgICAgICAgIGdhbW1hVGFyZ2V0ID0gaCAqIE1hdGgubWluKE1hdGgubWF4KCgoZGF0YS5nYW1tYSArIDQ1KSAvIDkwKSwgMCksIDEpO1xuICAgICAgICAgICAgICAgIGJldGFUYXJnZXQgPSB3ICogTWF0aC5taW4oTWF0aC5tYXgoKChkYXRhLmJldGEgKyA0NSkgLyA5MCksIDApLCAxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICAgICAgICAgICAgJGxvZy5sb2coJ2luaXQnKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBzZW5kT3JpZW50YXRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgc2VuZE1vdGlvbkRhdGEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzaXplRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICBmdW5jdGlvbiBzZW5kTW90aW9uRGF0YShldmVudCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ21vdGlvbk1vdmUnLCB7eDogZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54LCB5OiBldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnksIHo6IGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkuen0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlbmRPcmllbnRhdGlvbkRhdGEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnZ3lyb01vdmUnLCB7YWxwaGE6IGV2ZW50LmFscGhhLCBiZXRhOiBldmVudC5iZXRhLCBnYW1tYTogZXZlbnQuZ2FtbWF9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5pdCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgICAgICAgICBnYW1tYVRhcmdldDIgKz0gKGdhbW1hVGFyZ2V0IC0gZ2FtbWFUYXJnZXQyKSAqIC4yMjtcbiAgICAgICAgICAgICAgICBiZXRhVGFyZ2V0MiArPSAoYmV0YVRhcmdldCAtIGJldGFUYXJnZXQyKSAqIC4yMjtcblxuICAgICAgICAgICAgICAgICQoZWwpLmNzcygndG9wJywgZ2FtbWFUYXJnZXQyICsgJ3B4Jyk7XG4vLyAgICAgICAgICAgICAgICAkKGVsKS5jc3MoJ3RvcCcsIGJldGFUYXJnZXQyICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB4VGFyZ2V0MiArPSAoeFRhcmdldCAtIHhUYXJnZXQyKSAqIC4xMTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB5VGFyZ2V0MiArPSAoeVRhcmdldCAtIHlUYXJnZXQyKSAqIC4xMTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICQoZWwpLmNzcygnbGVmdCcsICdjYWxjKDUwJSArICcgKyB4VGFyZ2V0MiArICdweCknKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAkKGVsKS5jc3MoJ3RvcCcsICdjYWxjKDUwJSArICcgKyB5VGFyZ2V0MiArICdweCknKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGljayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1dKTsiXX0=
