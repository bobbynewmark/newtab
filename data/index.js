
/*
window.onclick = function(evt) {
    if ( $('.clickdiv').length > 15) {
	$('.clickdiv').remove();	
    }
 
    $('<div class="clickdiv">')
        .css({"left" : evt.clientX, "top": evt.clientY})
        .appendTo($("body"));
};
*/


var anArrayOfPointlessSayings = [
    'There is a fierce Lion in the street, a fierce Lion',
    'If you meet the Buddha, kill him',
    "Of course, no man is entirely in his right mind at any time.",
    "Don't Panic",
    "The future is already here - it's just not very evenly distributed",
    "The sky above the port was the color of television, tuned to a dead channel.",
    "They'll listen to Reason"
			    ];
function saying() {
    return anArrayOfPointlessSayings[Math.floor(Math.random() * anArrayOfPointlessSayings.length)];    
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('clock').innerHTML = h + ":" + m;
    var t = setTimeout(function () { startTime(); }, 3000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

function sayingAndPic() {
    $("#saying").text(saying());
    $.getJSON(
	"http://www.reddit.com/r/AbandonedPorn.json",
        function (data) {
            var imgs = [];
            if (data && data.data && data.data.children) {
                for (var i=0, item; item = data.data.children[i++];) {
                    if (item.data && item.data.domain === "i.imgur.com") {
                        imgs.push(item.data.url);
                    }
                }
            }
		  
            if (imgs.length) {
                $(".container").css("background-image", "url(" + imgs[Math.floor(Math.random() * imgs.length)] + ")");
            }
	    
        });
}

$(function () {
      startTime();
      sayingAndPic();
      $("#refresh").click(
	  function() { 
	      $("#refresh").fadeOut().fadeIn();
	      sayingAndPic(); });
  });


