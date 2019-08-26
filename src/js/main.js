  'use strict';
  (function(){
    var body = document.body;
    var nav = document.getElementsByClassName('nav')[0];
    var menu = document.getElementsByClassName('menu')[0];

    nav.addEventListener('click', function toggleClasses(){
      [body, menu, nav].forEach(function (el){
        el.classList.toggle('open');
      });
    }, false);
  })();



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("calendar__cell");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "event__show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "event__show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// //timer

// var endDate = new Date("Sep 15, 2019 12:00:00").getTime();

// var timer = setInterval(function() {

//     let now = new Date().getTime();
//     let t = endDate - now;
    
//     if (t >= 0) {
    
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         let secs = Math.floor((t % (1000 * 60)) / 1000);
    
//         document.getElementById("timer-days").innerHTML = days +
//         "<span class='timer__label'>Días</span>";
    
//         document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
//         "<span class='timer__label'>Hrs</span>";
    
//         document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
//         "<span class='timer__label'>min</span>";
    
//         document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
//         "<span class='timer__label'>seg</span>";
    
//     } else {

//         document.getElementById("timer").innerHTML = "The countdown is over!";
    
//     }
    
// }, 1000);

//end timer
