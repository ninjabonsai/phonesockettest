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