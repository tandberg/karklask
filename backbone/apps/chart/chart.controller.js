KarklaskApp.module('ChartApp', function(ChartApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ChartApp.Controller = {

        show: function(args) {
            var view = this.getView(args.collection);
            args.region.show(view);
        },

        getView: function(collection) {
            var view = new ChartApp.View({collection: collection});

            view.on('create:permalink', function(view) {
                var encoded = btoa(JSON.stringify(view.collection.toJSON()));
                Backbone.history.navigate('show/'+encoded);
            });

            return view;
        }
    };
});