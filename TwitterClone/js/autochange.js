//change twitter url based on screen size
  const screen = window.matchMedia( "(max-width: 767px)");

    if(screen.matches) {
    document.getElementById("goTweet").action = "https://twitter.com/home";
    document.getElementById("textmessage").name = "status" ;
    } else {
    document.getElementById("goTweet").action = "https://twitter.com/intent/tweet";
    document.getElementById("textmessage").name = "text" ;
    }

//auto change Dark mode 
const hours = new Date().getHours();
// const isDayTime = hours > 6 && hours < 20;

 if(hours >= 18 || hours <= 6) {  
   localStorage.removeItem("mode");
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

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-sun" style="font-size:17px;color:white"></i>';
   console.log("🌜 It's Night Time !");
 }else {
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

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-moon-o" style="font-size:17px;color:white"></i>';
    console.log("🌞 It's Day Time !");
 }

 var showHour;
if (hours > 12) {
   showHour = hours - 12;
   console.log("Loaded per hour: " + showHour + " PM");
}else {
   showHour = hours;
   console.log("Loaded per hour: " + showHour + " AM");
}


 var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
if(h == 18 && m == 00 && s == 00) { 
      // setInterval(function() {
                  window.location.reload();
                  console.log("Good Evening 6 PM !!");
      // }, 1000); 
}else if(h == 6 && m == 00 && s == 00){
      //  setInterval(function() {
                  window.location.reload();
                  console.log("Good Morning 6 AM !!");
      // }, 1000); 
}else {
    console.log("Have A Good Day !!");
}
document.addEventListener('DOMContentLoaded', () => {

var time = document.getElementById("time");
if (hours >= 1 && hours <=5){
  time.innerHTML = " Early Morning 🥱 from ";
}else if(hours >= 6 && hours < 12){
  time.innerHTML = " Good Morning 🌞 from ";
}else if (hours >= 12 && hours <= 14){
  time.innerHTML = " Good Afternoon ☀️ from " ;
}else if (hours >= 15 && hours <= 18){
  time.innerHTML = " Good Evening 🌤️ from ";
}else if (hours >= 19 && hours <= 24 || hours == 0){
  time.innerHTML = " Good Night 🌜 from ";
} else {
  time.innerHTML = " Warmly welcome to ";
}
});