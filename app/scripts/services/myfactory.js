'use strict';

/**
 * @ngdoc service
 * @name mikeroBlogApp.myFactory
 * @description
 * # myFactory
 * Factory in the mikeroBlogApp.
 */
angular.module('mikeroBlogApp')
  .factory('myFactory', function () {
    // Service logic
    // ...

    // Public API here
    return {
      getPosts: function () {
        var posts = [
          {
            id: 1,
            timestamp: 1421785585003,
            title: 'first post',
            text: 'this is my first post for my microblog made in angular and modified in yeoman blah blah blah',
            tags: [
              'thought'
            ]
          },
          {
            id: 2,
            timestamp: 1421785585003,
            title: 'second post',
            text: 'this is my first post for my <i>microblog</i> made in angular and modified in yeoman blah blah blah this is some more text that i am adding to make the post even longer',
            tags: [
              'thought'
            ],
            sources: [
              {
                id: 1,
                href: 'http://google.com',
                text: 'this is some quoted text from a source or maybe it was from its open graph data'
              }
            ]
          }
        ];
        return posts;
      }
    };
  });
