(function (eventHandlers) {

    eventHandlers.demo = function () {
        var events = require("events");
        var eventEmitter = new events.EventEmitter();

        var listener1 = function listener1() {
            console.log("listener1 executed");
        }

        var listener2 = function listener2() {
            console.log("listener2 executed");
        }

        eventEmitter.addListener('connection', listener1);
        eventEmitter.on('connection', listener2);

        var eventListeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
        console.log(eventListeners + " listeners active");

        eventEmitter.emit("connection");
    }
})(module.exports);