KarklaskApp.module('ShowApp', function(ShowApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ShowApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '(/)show': 'show'
        }
    });

    var API = {
        show: function(collection) {

            console.log(collection);
            ShowApp.List.Controller.list(collection);
        }
    };

    ShowApp.addInitializer(function() {
        new ShowApp.Router({
            controller: API
        });
    });

    App.vent.on('display', function(collection) {
        API.show(collection)
        Backbone.history.navigate('show');
    });
})  