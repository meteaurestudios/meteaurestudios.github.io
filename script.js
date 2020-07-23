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
	var join_button = document.getElementById("beta-button");
	join_button.className = "green_button";
	join_button.innerHTML = "REGISTERED"

	var joined_text = document.getElementById("email-registered");
	joined_text.style.display = "block";
}

window.onload = function() {

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
    		emailjs.sendForm('gmail', 'template_xG7jDpfU', this)
    		.then(function(response) {
    			console.log('Email sent', response.status, response.text);
    		}, function(error) {
    			console.log('Error, email not sent', error);
    		});
    	}

    });
}