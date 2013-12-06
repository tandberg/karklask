KarklaskApp.module('ShowApp.List', function(List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.Controller = {

        list: function(collection) {
            var view = this.getView(collection);

            App.main.show(view);
        },

        getView: function(collection) {
            var view = new List.View({collection: collection});
            return view;
        }

    };
});