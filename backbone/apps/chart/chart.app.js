KarklaskApp.module('ChartApp', function(ChartApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        show: function(args) {
            ChartApp.Controller.show(args)
        }
    };

    App.commands.setHandler('show:chart', function(args) {
        API.show(args);
    });
})