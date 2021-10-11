(function () {
	"use strict";

	const layer = document.createElement("div");
	layer.style.position = "fixed";
	layer.style.width = "0%";
	layer.style.height = "100%";
	layer.style.top = "0";
	layer.style.zIndex = "10000";
	layer.style.backgroundColor = "white";
	layer.style.opacity = "0.3";
	layer.style.transition = "width 0.5s ease-in-out";
	layer.style.pointerEvents = "none";
	document.body.appendChild(layer);

	function screen(to) {
		if (to === "right") {
			layer.style.left = "0";
			layer.style.right = "initial";
			setTimeout(() => {
				layer.style.width = "0%";
				layer.style.left = "initial";
				layer.style.right = "0";
			}, 500);
		} else {
			layer.style.left = "initial";
			layer.style.right = "0";
			setTimeout(() => {
				layer.style.width = "0%";
				layer.style.left = "0";
				layer.style.right = "initial";
			}, 500);
		}
		layer.style.width = "100%";
	}

	let work = true;
	const range = 20;
	const time = 1000;

	window.addEventListener("mousemove", e => {
		if (!work) return;
		const h = window.innerHeight - range;
		const w = window.innerWidth - range;

		if (e.x < range && e.y > h) {
			history.back();
			work = false;
			screen("right");
			setTimeout(() => {
				work = true;
			}, time);
		} else if (e.x > w && e.y > h) {
			history.forward();
			work = false;
			screen("left");
			setTimeout(() => {
				work = true;
			}, time);
		}
	});
})();
