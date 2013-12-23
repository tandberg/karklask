KarklaskApp.module('ListApp', function(ListApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ListApp.ItemView = Marionette.ItemView.extend({
        template: JST['backbone/apps/list/templates/_course.jst'],
        tagName: 'tr',
        className: function() {
            return this.model.get('grade')
        },

        triggers: {
            'click' : 'course:clicked'
        }
    });

    ListApp.View = Marionette.CompositeView.extend({
        template: JST['backbone/apps/list/templates/list.jst'],
        itemView: ListApp.ItemView,
        itemViewContainer: '#course-container',

        serializeData: function() {
            return this.collection.getPoints();
        }
    });
});