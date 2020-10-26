function testjs()
{
	var firsttext = getUrlVars()["name"];
	var editedname = firsttext.replace("~", "%20");
	var editedname2 = editedname.replace("~", "%20");
	var editedname3 = editedname2.replace("~", "%20");
	var editedname4 = editedname3.replace("~", "%20");
	window.location = 'http://dcs5604.com/cny20201.html?text='+editedname4;

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getmytext() {
	var mytext = getUrlVars()["text"];
	alert(mytext);
}

function sendtowhatsapp()
{
var mytext = getUrlVars()["text"];
	var inputVal = document.getElementById("textboxid").value;
	var outputVal = inputVal.replace(" ", "~");
	var outputVal2 = outputVal.replace(" ", "~");
	var outputVal3 = outputVal2.replace(" ", "~");
	var outputVal4 = outputVal3.replace(" ", "~");
window.location = 'http://wa.me/?text='+inputVal+' wishing you a Happy Chinese New Year 2020 %0A%0AOpen this ðŸ‘‡ %0A%0Adcs5604.com/cny2020.html?name='+outputVal4;
}

function loadname() {
	var mytext = getUrlVars()["text"];
	var mytext2 = mytext.replace("%20", "&nbsp");
	var mytext3 = mytext2.replace("%20", "&nbsp");
	var mytext4 = mytext3.replace("%20", "&nbsp");
	var mytext5 = mytext4.replace("%20", "&nbsp");
	document.write("<p class='aligncenter'><b><font size='600' face='verdana' color='yellow'> " + mytext5.big() + "</font></b></p>");
}

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function toggleImage() {
    if (document.getElementById("toggleImage").src == "http://dcs5604.com/firecrackerbf1.gif") 
    {
        document.getElementById("toggleImage").src = "http://dcs5604.com/firecrackers1.gif";
		var catMusic = new Audio("firecracker.mp3");
		catMusic.play();
    }
//	var firsttext = getUrlVars()["name"];
//	var editedname = firsttext.replace("~", "%20");
//	var editedname2 = editedname.replace("~", "%20");
//	var editedname3 = editedname2.replace("~", "%20");
//	var editedname4 = editedname3.replace("~", "%20");
	
	setTimeout('testjs()', 3000);
//	window.location = 'http://dcs5604.com/cny20201.html?text='+editedname4;

}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}