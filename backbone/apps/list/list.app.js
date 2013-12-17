KarklaskApp.module('ListApp', function(ListApp, App, Backbone, Marionette, $, _) {
    'use strict';

    var API = {
        list: function(args) {
            ListApp.Controller.list(args)
            window.collection = args.collection;
        }
    }

    App.commands.setHandler('show:list', function(args) {
        API.list(args);
    });
});