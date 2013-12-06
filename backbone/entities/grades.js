KarklaskApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    'use strict';

    Entities.Grade = Backbone.Model.extend({

        defaults: {
            code: '',
            title: '',
            grade: '-',
            points: '7.5'
        },

        getGradePoints: function() {
            var gradeToPoint = function() {
                switch (this.grade) {
                    case "A": return 5;
                    case "B": return 4;
                    case "C": return 3;
                    case "D": return 2;
                    case "E": return 1;
                    default:  return 0;
                }
            };
            return gradeToPoint() * points;
        }
    });

    Entities.Grades = Backbone.Collection.extend({
        model: Entities.Grade,

        comparator: 'grade',

        getAvg: function() {

            var totalGradePoints = 0;
            var totalPoints = 0;

            for(var i = 0; i < this.models.length; i++) {
                var course = this.get(i);
                if(course.get('grade') != "-") {
                    totalGradePoints += course.getGradePoints();
                    totalPoints += course.get('points');
                }
            }
            return (totalGradePoints / totalPoints).toPrecision(3);
        }
    });
});