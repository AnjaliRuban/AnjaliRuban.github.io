"use strict";
/*jslint devel: true */
/*global $, jQuery, alert*/

function changeIce() {
    
    var v1 = document.getElementById("menuForm").elements.namedItem("energy").value,
        v2 = document.getElementById("menuForm").elements.namedItem("water").value,
        v3 = document.getElementById("menuForm").elements.namedItem("waste").value,
        totalVar = parseInt(v1) + parseInt(v2) / 10 + parseInt(v3);
    
    //alert(v1);
    //alert(v2);
    //alert(v3);
    //alert(totalVar);

    totalVar = 500 * (1 - totalVar / 6000) + 150;
    
    //alert(totalVar);
    
    document.getElementById("ice").style.width = totalVar + 'px';

    //alert(document.getElementById("ice").style.width);
    //alert(window.innerWidth);
    var mar = (window.innerWidth - totalVar) / 2;
    //alert(mar);
    document.getElementById("ice").style.left = mar + "px";
}

function changeFoot() {
    
    var v1 = document.querySelectorAll('input[type="checkbox"]:checked').length;

    var totalVar = 300 * (1 - v1 / 15) + 150;
    var totalVar2 = 0.38 * (1 - v1 / 15) + 14.25;
    
    totalVar2 = Math.round(totalVar2 * 100) / 100;
    totalVar2 = Math.round(totalVar2 * 100) / 100;
    
    //alert(totalVar);
    
    document.getElementById("foot").style.width = totalVar + 'px';
    
    document.getElementById("foot").style.marginTop = (document.getElementById("footprintbox").style.height - document.getElementById("foot").style.height) / 2; 
    
    document.getElementById("emmissions").innerHTML = "You make about " + totalVar2 + " metric tons of C02 emmissions per year.";

    //alert(document.getElementById("foot").style.width);
    
    //var mar = (document.width - totalVar) / 2;
    //document.getElementById("ice").style.left = mar + "px";
}

/*function defineVal(name) {
    var currentVal = name.value;

    //alert(name.value);
    
    if (currentVal == "off") {
        currentVal = "on";
    } else if (currentVal == "on") {
        currentVal = "off";
    } else {
        currentVal = "on";
    }
    
    alert(currentVal);

    name.value = currentVal;
    
    alert(name.value);

    
    changeFoot();
}*/


function opentab(evt, tabName) {
    
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i = i + 1) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i = i + 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showValue(newValue) {
    changeIce();
    
	document.getElementById("energy").innerHTML = newValue;
}
function showValue1(newValue) {
    changeIce();
	document.getElementById("water").innerHTML = newValue;
}
function showValue2(newValue) {
    changeIce();
	document.getElementById("waste").innerHTML = newValue;
}





// keys.js
// Contains keys to run this demo
// The keys should be kept secret and separate from the code
// Enter your keys below to take the first in running this step 
// VROOOOM VROOM



/*
 * index.js
 * Clarifai Basic Application demo code
 */

/*jslint devel: true */
/*global $, jQuery, alert, Clarifai*/



