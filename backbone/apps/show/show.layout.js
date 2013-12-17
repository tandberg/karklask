KarklaskApp.module('ShowApp', function(ShowApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ShowApp.Layout = Marionette.Layout.extend({
        template: JST['backbone/apps/show/templates/layout.jst'],

        regions: {
            leftRegion: '#left',
            rightRegion: '#right'
        }
    });
});