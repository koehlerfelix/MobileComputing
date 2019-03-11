/*
Name: function.js
Description: cntains the main functions
Version: 1.0
*/

//Mobile Menu ----------------------------------------------

var menuIsOpen = false;

function openMenu() {
    var menu = document.getElementById("menu");
    if (!menuIsOpen) {
        menuIsOpen = true;
        menu.classList.add("open-menu");
    } else {
        menuIsOpen = false;
        menu.classList.add("close-menu");
        setTimeout(function() {
            menu.classList.remove("open-menu");
            menu.classList.remove("close-menu");
        }, 250);
    }
}


// Distanzmessung ------------------------
var valueP;
function getLocation() {
    valueP = document.getElementById("valueP");
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showDistance, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showDistance(position) {
    valueP.innerHTML = " ";
    var actualLatitude = position.coords.latitude;
    var actualLongitude = position.coords.longitude;
    
    var jerryLatitude = 49.2948033;
    var jerryLongitude = 8.73504156;
    
    var dLatitude = Math.abs(jerryLatitude - actualLatitude);
    var dLongitude = Math.abs(jerryLongitude - actualLongitude);
    //calculate distance 1degree = 111,12km
     var distance = (Math.sqrt(dLatitude * dLatitude + dLongitude * dLongitude) * 111.120).toFixed(3);
    
    setTimeout(function() {valueP.innerHTML = distance + "  Kilometer";},
        100);	
}
function showError(error) {
    valueP.innerHTML = "Es gab ein Problem. Möglicherweiße keine Internetverbindung.";
}
