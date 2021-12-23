  var userName;
    var input = document.getElementById('username');
    var storedUserName;
     var storedValue;
   
    function store() {
        localStorage.setItem('storedUserName', userName);
   }
   function get(){
    storedValue  = localStorage.getItem('storedUserName');
   }
     storedValue  = localStorage.getItem('storedUserName');

    if(storedValue){
    document.getElementById('username').innerHTML = storedValue;
  }else{
     document.getElementById('username').innerHTML = "User"
  }

    input.addEventListener('click', function(){
	  userName = prompt("What's your first name?");
     
	  if (userName != null && userName.length != 0) {
     var firstOne = userName.slice(0,1);
     firstOne = firstOne.toUpperCase();
     var lastOne = userName.slice(1,userName.length);
     lastOne = lastOne.toLowerCase();
     var result = firstOne + lastOne;
     userName = result;
     store();
     get();
     // var storedValue  = localStorage.getItem('storedUserName');
     userName = storedValue;
     document.getElementById('username').innerHTML = userName;
  }
	else {
		// document.getElementById('username').innerHTML = "Unknown User";
		userName = "User";
    document.getElementById('username').innerHTML = userName;
	}

});

var tweet = document.getElementById("textmessage").value;
var storedMessage;
storedMessage = localStorage.getItem('storedText');

  if(storedMessage){
    document.getElementById('textmessage').innerHTML = storedMessage;
  }else{
     tweet = "";
  }
var tweetCount = tweet.length;
var textCount = document.getElementById("statusCount");
var textReCount = document.getElementById("remainCount");
textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";
var tweetButton = document.getElementById("submit");

document.getElementById("textmessage").oninput = () => {
var tweet = document.getElementById("textmessage").value;

localStorage.setItem('storedText', tweet);
storedMessage = localStorage.getItem('storedText');


  

var tweetCount = tweet.length;
var textCount = document.getElementById("statusCount");
var textReCount = document.getElementById("remainCount");
textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";


$('.highlighter').show();
 if (tweetCount > 280) {
    textReCount.style.color = "red";
    document.querySelector('#submit').disabled = true;
    // document.getElementById("short").style.display = "unset";
    document.getElementById("submit").innerHTML = '<i class="fas fa-exclamation-triangle"></i> '.concat("Error"); ;

 }else if (tweetCount >= 280) {
    textReCount.style.color = "red";
    document.querySelector('#submit').disabled = false;
    document.getElementById("submit").innerHTML = '<i class="fab fa-twitter"></i> '.concat("Tweet") ;
 }else if (tweetCount >= 260) {
    textReCount.style.color = "orange";
    document.querySelector('#submit').disabled = false;
    document.getElementById("submit").innerHTML = '<i class="fab fa-twitter"></i> '.concat("Tweet");

 }else{
    textReCount.style.color = "#2196f3";
    document.querySelector('#submit').disabled = false;
    document.getElementById("submit").innerHTML = '<i class="fab fa-twitter"></i> '.concat("Tweet");

 }


// }
}


function doCopy(){
  document.getElementById("textmessage").select();
  document.execCommand("copy");
}

function doClear(){
    document.getElementById("textmessage").value = "";
    // localStorage.clear();
    localStorage.removeItem('storedText');
    $('.highlighter').hide();
  textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";
textReCount.style.color = "#2196f3";
// document.getElementById("short").style.display = "none";
// window.location.reload(true);
//  location.href = "./index.html"
}

function changeNight(){

   var back = document.getElementById("backg");
   if (back.style.backgroundColor != "black") {

   back.style.background = "black";
   back.style.transition = "all 1s ease 0s" ;

   var textbox = document.getElementById("textmessage");
   textbox.style.background = "black";
   textbox.style.color = "white";
   textbox.style.boxShadow = "none";
   textbox.style.transition = "all 1s ease 0s" ;

   var userBox = document.getElementById("username");
   userBox.style.color = "black";
   userBox.style.background = "#e8ff08";

   var speaker = document.getElementById('change');
   speaker.style.background = "black";

   var button = document.getElementById('submit');
   button.style.borderColor = '#ffeb3b';
   button.style.background = "black";

   var copy = document.getElementById('copy');
   copy.style.borderColor = '#ffeb3b';
   copy.style.background = "black";
   var del = document.getElementById('delete');
   del.style.borderColor = '#ffeb3b';
   del.style.background = "black";

   var date = document.getElementById("showDate");
   date.style.background = "black";
   date.style.color = "white";

  //  var addBtn = document.querySelector('#add-button');
   addBtn.style.background = "black";

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-sun" style="font-size:17px;color:white"></i>';
    
   var change = "black";
   localStorage.setItem("mode" , change);
    back.style.background = localStorage.getItem("mode");
   }else{
    
   back.style.background = "white";
   back.style.transition = "all 1s ease 0s" ;

   var textbox = document.getElementById("textmessage");
   textbox.style.background = "white";
   textbox.style.color = "black";
   textbox.style.boxShadow = "0 0.0625rem 0.375rem 0 #908b8b";
   textbox.style.transition = "all 1s ease 0s" ;

   var userBox = document.getElementById("username");
   userBox.style.color = "white";
   userBox.style.background = "#607d8b";

   var speaker = document.getElementById('change');
   speaker.style.background = "#03a9f4";
 
   var button = document.getElementById('submit');
   button.style.borderColor = ' #673ab7';
   button.style.background = "#03a9f4";

   var copy = document.getElementById('copy');
   copy.style.borderColor = ' #673ab7';
   copy.style.background = "#03a9f4";

   var del = document.getElementById('delete');
   del.style.borderColor = ' #673ab7';
   del.style.background = "#03a9f4";

   var date = document.getElementById("showDate");
   date.style.background = "white";
   date.style.color = "black";

  //  var addBtn = document.querySelector('#add-button');
   addBtn.style.background = "white";

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-moon-o" style="font-size:17px;color:white"></i>';

   var change = "white";
   localStorage.setItem("mode" , change);
    back.style.background = localStorage.getItem("mode");
   }
  
}


$(document).ready(function() {
    $("textarea").hashtags();        
});

  // document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("mode") == "black") {
       var back = document.getElementById("backg");
       back.style.background = "black";
       back.style.transition = "all 1s ease 0s" ;

   var textbox = document.getElementById("textmessage");
   textbox.style.background = "black";
   textbox.style.color = "white";
   textbox.style.boxShadow = "none";
   textbox.style.transition = "all 1s ease 0s" ;

   var userBox = document.getElementById("username");
   userBox.style.color = "black";
   userBox.style.background = "#e8ff08";

   var speaker = document.getElementById('change');
   speaker.style.background = "black";

   var button = document.getElementById('submit');
   button.style.borderColor = '#ffeb3b';
   button.style.background = "black";

   var copy = document.getElementById('copy');
   copy.style.borderColor = '#ffeb3b';
   copy.style.background = "black";
   var del = document.getElementById('delete');
   del.style.borderColor = '#ffeb3b';
   del.style.background = "black";

   var date = document.getElementById("showDate");
   date.style.background = "black";
   date.style.color = "white";

  //  var addBtn = document.querySelector('#add-button');
   addBtn.style.background = "black";

  } else if(localStorage.getItem("mode") == "white") {
       var back = document.getElementById("backg");
       back.style.background = "white";
       back.style.transition = "all 1s ease 0s" ;

   var textbox = document.getElementById("textmessage");
   textbox.style.background = "white";
   textbox.style.color = "black";
   textbox.style.boxShadow = "0 0.0625rem 0.375rem 0 #908b8b";
   textbox.style.transition = "all 1s ease 0s" ;

   var userBox = document.getElementById("username");
   userBox.style.color = "white";
   userBox.style.background = "#607d8b";

   var speaker = document.getElementById('change');
   speaker.style.background = "#03a9f4";
 
   var button = document.getElementById('submit');
   button.style.borderColor = ' #673ab7';
   button.style.background = "#03a9f4";

   var copy = document.getElementById('copy');
   copy.style.borderColor = ' #673ab7';
   copy.style.background = "#03a9f4";

   var del = document.getElementById('delete');
   del.style.borderColor = ' #673ab7';
   del.style.background = "#03a9f4";

   var date = document.getElementById("showDate");
   date.style.background = "white";
   date.style.color = "black";

  //  var addBtn = document.querySelector('#add-button');
   addBtn.style.background = "white";
  }
  // document.getElementById("short").style.display = "none";
var d = new Date();

var day = d.getDate();

var output = ((''+day).length<2 ? '0' : '') + day;
    var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

d = new Date();
x = d.getMonth();


var popup = document.getElementById("showDate");

  popup.innerHTML = '<i class="fa fa-calendar"></i> '  + output;

  popup.addEventListener('click', function(){

    if (popup.value != months) {
    popup.innerHTML = months[x];
    }else{
    popup.innerHTML = '<i class="fa fa-calendar"></i> '  + output;
    }


  });
