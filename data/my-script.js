// JavaScript source code

var anArrayOfPointlessSayings = [
    'There is a fierce Lion in the street, a fierce Lion',
    'If you meet the Buddha, kill him',
    "Of course, no man is entirely in his right mind at any time.",
    "There is no point in using the word 'impossible' to describe something that has clearly happened.",
    "Don't Panic",
    "The future is already here - it's just not very evenly distributed",
    "The sky above the port was the color of television, tuned to a dead channel.",
    "When you are wrestling for possession of a sword, the man with the handle always wins.",
    "They'll listen to Reason"
];
var saying = anArrayOfPointlessSayings[Math.floor(Math.random() * anArrayOfPointlessSayings.length)];
var html = [];

html.push('<div ')
html.push('style="', 'position:relative;', 'background-size:cover;', 'background-position:50% 50%;', '-moz-box-flex:1;', '-moz-user-focus:normal;', '-moz-box-orient:vertical;', 'background-image:url(http://i.imgur.com/Z2WPtJS.jpg)');
html.push('">', '<h1>', saying, '</h1>', '</div>');

var element = window.document.getElementById("newtab-scrollbox");
$(element).hide();
//$($(html.join(""))).insertAfter($(element));


