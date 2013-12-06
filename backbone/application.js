var KarklaskApp = window.KarklaskApp = (function(){
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        main: '#main'
    });

    App.on('initialize:after', function() {
        if(Backbone.history) {
            Backbone.history.start();
        } else {
            console.error('Backbone history cant start...');
        }
    });

    return App;
})();

$(function() {
    KarklaskApp.start();
});