import Event from "pubsub-js";

const Notify = {
    info: function (message) {
        Event.publish("notify.info", {msg: message});
    },
    warning: function (message) {
        Event.publish("notify.warning", {msg: message});
    },
    error: function (message) {
        Event.publish("notify.error", {msg: message});
    },
    success: function (message) {
        Event.publish("notify.success", {msg: message});
    },
    ajaxStart: function() {
        Event.publish("ajax.start");
    },
    ajaxEnd: function() {
        Event.publish("ajax.end");
    },
    blockUI: function() {
        const el = document.getElementById('p-busy-overlay');

        if(el) {
            el.style.display = 'block';
        }
    },
    unblockUI: function() {
        const el = document.getElementById('p-busy-overlay');

        if(el) {
            el.style.display = 'none';
        }
    }
};

export default Notify;