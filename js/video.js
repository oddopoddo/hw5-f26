var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("Volume is " + video.volume);
	let volume = document.getElementById("volume");
	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow video");
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= (1 / 0.9);
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	let volume = document.getElementById("volume");
	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});