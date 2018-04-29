$(document).ready(function () {
  var output = $("#output");    
  var template = $("#cartoons").html();

  var data = { 
    cartoons : [{
      name: 'Tom and Jerry',
      link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry'
    }, {
      name: 'Cinderella',
      link: 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)'
    }, {
      name: 'Peter Pan',
      link: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)'
    }],
    display: function () {
      return function (text, render) {
        return "<p class='cartoon-name'>" + render(text) + "</p>";
      };
    },
    onClick: function () {
      return function (text, render) {
        return "<a href='" + render(text) + "' target='_blank'>wiki link</a>";
      };
    }
  };

  html = Mustache.render(template, data);
  output.append(html);
});