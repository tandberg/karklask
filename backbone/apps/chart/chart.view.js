KarklaskApp.module('ChartApp', function(ChartApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ChartApp.View = Marionette.ItemView.extend({
        template: JST['backbone/apps/chart/templates/chart.jst'],

        triggers: {
            'click [data-js-permalink]': 'create:permalink'
        },

        initialize: function() {
            // this.initChart(this.collection);
        },

        onShow: function(collection) {
          var ctx = $("#myChart").get(0).getContext("2d");
          new Chart(ctx).Pie(this.extractData(), {animateScale : true});
        },

        extractData: function() {
          var maps = {A:0, B:0, C:0, D:0, E:0};
          _.each(this.collection.models, function(course) {
            maps[course.get('grade')] += course.get('points')
          })

          var data = [
              {
                value: maps['A'],
                color:"#98FE98"
              },
              {
                value : maps['B'],
                color : "#98F098"
              },
              {
                value : maps['C'],
                color : "#FAE698"
              },
              {
                value : maps['D'],
                color : "#FEC198"
              },
              {
                value : maps['E'],
                color : "#FEAC98"
              }     
            ];

            return data;
        }
    });
});