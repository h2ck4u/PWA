(function () {
	// TODO 서비스워커 등록
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("/service-worker.js").then((reg) => {
				console.log("Service worker registered.", reg);
			});
		});
	}

	function playSound(e) {
    const keyCode = e.target.getAttribute('data-key');
		const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${keyCode}"]`);
		if (!audio) {
      return;
    }
		audio.currentTime = 0; // rewind to the start
		audio.play();
		key.classList.toggle("playing");
	}

	function removeTransition(e) {
		if (e.propertyName !== "background-color") {
      return; 
    }
		this.classList.remove("playing");
  }
  
	const keys = document.querySelectorAll(".key");
	keys.forEach((key) => {
		key.addEventListener("transitionend", removeTransition);
		key.addEventListener('click', playSound);
	});
})();
