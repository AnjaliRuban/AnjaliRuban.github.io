"use strict";

function changeIce() {
    
    var v1 = document.getElementById("val1").value,
        v2 = document.getElementById("val2").value,
        v3 = document.getElementById("val3").value,
        totalVar = v1 + v2 + v3;
    
    totalVar = 500 * (1 - totalVar / 6000) + 150;
    
    alert(document.getElementById("ice").style.twidth);
    
    document.getElementById("ice").style.width = totalVar + "px";

    alert(document.getElementById("ice").style.width);
    
    //var mar = (document.width - totalVar) / 2;
    //document.getElementById("ice").setAttribute("style", "margin-left:" + mar + "px");
}

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

