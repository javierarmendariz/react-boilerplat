/**
* Main Menu Collection.
* @module Technologies-Collection
* @requires module:backbone
* @example
* // JSON Result
* [
*   {
*     "icon": "devicon-jquery-plain",
*     "name": "jQuery",
*     "description": "What would my life be without this library! DOM selection, events delegation, styling, plugins development."
*   },
*   {
*     "icon": "devicon-backbonejs-plain",
*     "name": "Backbone",
*     "description": "Even when I like Pasta, I prefer no spaghetti code. So my development is basesd on a well MVC/Router layers definition."
*   },
*   {
*     "icon": "devicon-less-plain-wordmark",
*     "name": "Less",
*     "description": "I see Less like the next CSS version (CSS4). With variables, mixing, nesting and all you need to reuse your CSS."
*   },
*   {
*     "icon": "devicon-bootstrap-plain",
*     "name": "Bootstrap",
*     "description": "Nowadays with the variety of devices with internet access, I always program my applications to be used on mobiles, tables and desktop screens."
*   },
*   {
*     "icon": "devicon-html5-plain",
*     "name": "HTML5",
*     "description": "Let's be semantic since the developers are also humans!"
*   },
*   {
*     "icon": "devicon-css3-plain",
*     "name": "CSS3",
*     "description": "Internet Explorer is my litmus test, if IE renders the application properly, that means I am doing the things well :-)"
*   },
*   {
*     "icon": "devicon-apache-plain",
*     "name": "Apache",
*     "description": "I have used this mature server since the beginning of time, on both PC and Mac."
*   },
*   {
*     "icon": "devicon-bower-plain",
*     "name": "Bower",
*     "description": "Repositories and more repositories! I use Bower like an standard mechanism to interact with the Javascript universe."
*   },
*   {
*     "icon": "devicon-gulp-plain",
*     "name": "Gulp",
*     "description": "Concatenating, Uglifying, Minifying, JSlinting, Spriting, Refreshing. Is not this amazing!"
*   },
*   {
*     "icon": "devicon-react-plain",
*     "name": "React",
*     "description": "A new and fun way to create my View layers."
*   }
* ]
*/

define(['backbone'], function (Backbone) {

    'use strict';

	var Collection = Backbone.Collection.extend({

            url: function () {

            	var urlString = 'http://www.jearwebdevelopment.com/wp/wp-json/pages/34';

            	if (EnvironmentConfiguration.isLocalHost()) {
					urlString = 'http://localhost:3000/technologies-list';
            	}

				return urlString;

            },

            parse: function (response) {

            	if (!EnvironmentConfiguration.isLocalHost()) {
                	response = response.meta.technologies;
            	}

            	return response;
            }

        });

	return Collection;

});