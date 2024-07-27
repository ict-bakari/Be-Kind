/* global document */


var myHeading = document.querySelector('h1');
myHeading.textContent = 'Be Kind';

/*code for image changer*/

var mountainImage = document.querySelector('img');
mountainImage.onclick = function () {
    'use strict';
    var myImages = mountainImage.getAttribute('src');
    if (myImages === 'images/girrafe.jpg') {
        mountainImage.setAttribute('src', 'images/mountain.jpg');
    } else {
        mountainImage.setAttribute('src', 'images/girrafe.jpg');
    }
    
};

/*personalised welcome message*/
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function seUserName(){
    'use strict';
    var myName = window.prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Be Kind, ' + myName;
}
if (!localStorage.getItem('name')){
    seUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Be Kind, ' + storedName;
}
nameButton.onclick = function(){
    'use strict';
    seUserName();
};


