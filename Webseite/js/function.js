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
