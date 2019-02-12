window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var restarauntArray = ['McDonald\'s', 'Burger King', 'Wendy\'s', 'Five Guys', 'Sonic', 'Fat Cow']
var number = Math.floor(Math.random()*restarauntArray.length);