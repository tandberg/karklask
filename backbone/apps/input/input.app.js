KarklaskApp.module('InputApp', function(InputApp, App, Backbone, Marionette, $, _) {
    'use strict';

    InputApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '(/)': 'input',
            '(/)input': 'input'
        }
    });

    var API = {
        input: function() {
            new InputApp.Controller();
        }
    };

    InputApp.addInitializer(function() {
        new InputApp.Router({
            controller: API
        });
    });


    App.vent.on('run', function(paste) {
        var courses = [];
        var courseText = paste.split("Kunngj.\n")[1].split("\nSum studiepoeng")[0].split('\n');

        for(var i = 0; i< courseText.length; ++i) {
            var text = courseText[i].split("\t");

            var index = -1;
            for (var j = 3; j < text.length; ++j) {
                if (text[j].length == 1) {
                    index = j;
                    break;
                }
            }
            if (index == -1) continue;
            var code = text[1];
            var title = text[2];
            var grade = text[index];
            var points = parseFloat(text[index+1].replace(",","."));

            courses.push(new KarklaskApp.Entities.Grade({code: code, title: title, grade: grade, points: points}));
        }
        var c = new KarklaskApp.Entities.Grades(courses);

        App.vent.trigger('display', c);
//        $('#main').html(JSON.stringify(c))
    })
});