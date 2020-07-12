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
	window.location.hash = "join";
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
		var redirect = document.getElementById("redirect_form");
		var url = window.location.href.split("#")[0];
		redirect.value = url + "#registered"
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
    	emailjs.sendForm('gmail', 'template_xG7jDpfU', this)
    	.then(function(response) {
    		console.log('SUCCESS!', response.status, response.text);
    	}, function(error) {
    		console.log('FAILED...', error);
    	});
    });
}