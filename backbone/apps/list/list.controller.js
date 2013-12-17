KarklaskApp.module('ListApp', function(ListApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ListApp.Controller = {

        list: function(args) {
            var view = this.getView(args.collection);
            args.region.show(view);
        },

        getView: function(collection) {
            var view = new ListApp.View({collection: collection});
            return view;
        }
    };
});