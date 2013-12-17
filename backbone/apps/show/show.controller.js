KarklaskApp.module('ShowApp', function(ShowApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ShowApp.Controller = Marionette.Controller.extend({

        initialize: function(collection) {
            var layout = this.getLayout();

            layout.on('show', function() {
                App.execute('show:list', {region: layout.leftRegion, collection: collection});
                App.execute('show:chart', {region: layout.rightRegion, collection: collection});
            });

            App.main.show(layout);
        },

        getLayout: function() {
            return new ShowApp.Layout();
        }

    });
})