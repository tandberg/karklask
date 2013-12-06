KarklaskApp.module('InputApp', function(InputApp, App, Backbone, Marionette, $, _) {
    'use strict';

    InputApp.Controller = Marionette.Controller.extend({

        initialize: function() {
            var view = this.getView();
            var self = this;

            view.on('paste', function() {
                App.vent.trigger('run', $('#input').val());
            })

            App.main.show(view);
        },

        getView: function() {
            return new InputApp.View();
        }

    })
});