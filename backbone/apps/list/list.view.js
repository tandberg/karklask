KarklaskApp.module('ListApp', function(ListApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ListApp.ItemView = Marionette.ItemView.extend({
        template: JST['backbone/apps/list/templates/_course.jst'],
        tagName: 'tr',
        className: function() {
            return this.model.get('grade')
        }
    });

    ListApp.View = Marionette.CompositeView.extend({
        template: JST['backbone/apps/list/templates/list.jst'],
        itemView: ListApp.ItemView,
        itemViewContainer: '#course-container'
    });
});