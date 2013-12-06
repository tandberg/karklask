KarklaskApp.module('ShowApp.List', function(List, App, Backbone, Marionette, $, _) {
    'use strict';

    List.ItemView = Marionette.ItemView.extend({
        template: JST['backbone/apps/show/list/templates/_course.jst'],
        tagName: 'tr',
        className: function() {
            return this.model.get('grade')
        }
    });

    List.View = Marionette.CompositeView.extend({
        template: JST['backbone/apps/show/list/templates/list.jst'],
        itemView: List.ItemView,
        itemViewContainer: '#course-container'
    });
});