KarklaskApp.module('ChartApp', function(ChartApp, App, Backbone, Marionette, $, _) {
    'use strict';

    ChartApp.View = Marionette.ItemView.extend({
        template: JST['backbone/apps/chart/templates/chart.jst'],

        triggers: {
            'click [data-js-permalink]': 'create:permalink'
        },
        
        events: {
            'click [data-js-pie]': 'showPiechart',
            'click [data-js-time]' : 'showTimechart'
        },

        onShow: function() {
            this.showPiechart({animateScale: true, animationSteps: 50});
        },

        extractPieData: function() {
            var maps = {A:0, B:0, C:0, D:0, E:0};
            _.each(this.collection.models, function(course) {
                maps[course.get('grade')] += course.get('points')
            });

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
        },

        yearsort: function(a, b) {
            var a1 = a.split(' ');
            var b1 = b.split(' ');
            if(a1[1] === b1[1]) {
                if(a1[0] > b1[0]) {
                    return -1;
                } else {
                    return 1;
                }
            }

            else {
                if(a1[1] > b1[1]) {
                    return 1;
                } else {
                    return -1;
                }
            }
        },

        extractLineData: function() {

            var labels = [];
            _.each(this.collection.models, function(course) {
                labels.push(course.get('year'));
                labels = _.uniq(labels);
            });
            labels.sort(this.yearsort);

            var tmp = [];
            for(var i = 0; i < labels.length; i++) {
                _.each(this.collection.models, function(course) {
                    if(course.get('year') === labels[i]) {
                        tmp[i] = (course.getGradePoints() / course.get('points'));
                    }
                });
            }

            var datasets = [
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : tmp
                }
            ];

            var data = {
                labels: labels,
                datasets: datasets
            };

            return data;
        },

        showPiechart: function(options) {
            $('#chart').html('<canvas id="piehcart" width="600" height="600"></canvas>');
            var ctx = $('#piehcart').get(0).getContext('2d');
            new Chart(ctx).Pie(this.extractPieData(), options);
        },

        showTimechart: function() {
            $('#chart').html('<canvas id="timechart" width="600" height="300"></canvas>');
            var ctx = $('#timechart').get(0).getContext('2d');
            new Chart(ctx).Line(this.extractLineData(), {animationSteps : 30,scaleOverride : true, scaleSteps: 8,scaleStepWidth: 0.5, scaleStartValue: 1});
        }

    });
});