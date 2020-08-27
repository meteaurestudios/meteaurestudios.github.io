function openAboutPane() {
	var x = document.getElementById("about_pane");
	x.style.display = "block";
}

function closeAboutPane() {
	var x = document.getElementById("about_pane");
	x.style.display = "none";
	window.location.hash = ""
}

function openJoinBetaPane() {
	var x = document.getElementById("joinbeta_pane");
	x.style.display = "block";
}

function closeJoinBetaPane() {
	var x = document.getElementById("joinbeta_pane");
	x.style.display = "none";
	window.location.hash = ""
}

function validateEmail() {
	var email = document.getElementById("email").value;
	var valid = /^\S+@gmail\.com$/.test(email);

	if(!valid) {
		var x = document.getElementById("email-error");
		x.style.display = "block";
	}
	else {
		closeJoinBetaPane();
		displayRegistered();
		window.location.hash = '#registered';
	}

	return valid;
}

function displayRegistered() {
	var join_button_top = document.getElementById("alpha-button").getElementsByTagName("img").item(0);
	var join_button_bottom = document.getElementById("alpha-button-bottom").getElementsByTagName("img").item(0);

	join_button_top.setAttribute("src", "img/alpha-button-registered.svg");
	join_button_bottom.setAttribute("src", "img/alpha-button-registered.svg");

	var joined_text = document.getElementById("email-registered");
	joined_text.style.display = "block";
}

// Display menu items in black/white depending on scroll position
window.addEventListener('scroll', function(e) {

	var header = document.getElementsByTagName("header").item(0);
	var menu_items = document.getElementsByClassName("menu-item");
	var color = window.scrollY > header.offsetHeight - menu_items.item(0).offsetHeight ? "#333" : "#fff"

	for (var i = 0; i < menu_items.length; i++) {
		menu_items[i].style.color = color;
	}

});

function resize_phones() {
	var innerScreenWidth = document.getElementsByClassName('phone-frame')[0].offsetWidth*0.93;
	var videoContents = document.getElementsByClassName('video-content');

	// Place properly content inside phone mockup
	for(var i = 0; i < videoContents.length; i++) {
	    videoContents[i].style.width = innerScreenWidth;
	    videoContents[i].style.height = videoContents[i].offsetWidth*2;
	    videoContents[i].style.left = 0.034*innerScreenWidth;
	    videoContents[i].style.top = 0.025*innerScreenWidth;
	    videoContents[i].style.borderRadius =  0.086*innerScreenWidth + "px";
	}
}

window.onresize = resize_phones;

window.onload = function() {

	resize_phones();

	var element = window.location.hash;

	if(element == "#registered") {
		displayRegistered();
	}
	else if(element == "#join") {
		openJoinBetaPane();
	}
	else if(element == "#about") {
		openAboutPane();
	}

    // EmailJs callback
    document.getElementById('registration-form').addEventListener('submit', function(event) {

    	event.preventDefault();

    	var valid = validateEmail();
    	console.log(valid ? 'valid email entered' : 'invalid email format');
    	
    	if(valid) {
    		// emailjs.sendForm('gmail', 'template_xG7jDpfU', this)
    		// .then(function(response) {
    		// 	console.log('Email sent', response.status, response.text);
    		// }, function(error) {
    		// 	console.log('Error, email not sent', error);
    		// });

    		console.log("ok");
    	}

    });
}