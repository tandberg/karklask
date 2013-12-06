KarklaskApp.module('InputApp', function(InputApp, App, Backbone, Marionette, $, _) {
    'use strict';

    InputApp.View = Marionette.ItemView.extend({
        template: JST['backbone/apps/input/templates/input.jst'],

        triggers: {
            'keyup #input': 'paste'
        }
    });
});