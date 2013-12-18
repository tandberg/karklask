KarklaskApp.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    'use strict';

    Entities.Grade = Backbone.Model.extend({

        defaults: {
            year: '',
            code: '',
            title: '',
            grade: '-',
            points: '7.5'
        },

        getGradePoints: function() {
            var gradeToPoint = function(grade) {
                switch (grade) {
                    case "A": return 5;
                    case "B": return 4;
                    case "C": return 3;
                    case "D": return 2;
                    case "E": return 1;
                    default:  return 0;
                }
            };

            return gradeToPoint(this.get('grade')) * this.get('points');
        }
    });

    Entities.Grades = Backbone.Collection.extend({
        model: Entities.Grade,

        comparator: 'grade',

        getPoints: function() {
            var totalGradePoints = 0;
            var totalPoints = 0;
            _.each(this.models, function(course) {
                if(course.get('grade') != "-") {
                    totalGradePoints += course.getGradePoints();
                    totalPoints += course.get('points');
                }
            })

            return {avg: (totalGradePoints / totalPoints).toPrecision(3), total: totalPoints};
        }
    });
});