const c = [
	"π ≈ 3.141592653589793",
	"τ ≈ 6.283185307179586",
	"e ≈ 2.718281828459045",
	"φ ≈ 1.6180339887498948",
	"√2 ≈ 1.414213562373095",
	"ln(2) ≈ 0.693147180559945",
	"c = 299,792,458",
	"g ≈ 0.000000000066743",
];


document.addEventListener("DOMContentLoaded", () => {

	const themeBtn = document.getElementById("theme-toggle");
	const iframe = document.getElementById("shiny-frame");
	const themePref = localStorage.getItem("theme");

	let isDark = themePref === "dark";

	if (themePref === null) {
		isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	}

	function applyTheme() {
		document.body.classList.toggle("dark", isDark);
		if (themeBtn) themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
		localStorage.setItem("theme", isDark ? "dark" : "light");

		if (iframe && iframe.contentWindow) {
			iframe.contentWindow.postMessage(
				{ type: "theme", dark: isDark },
				"*"
			);
		}
	}

	applyTheme();

	if (iframe) {
		iframe.addEventListener("load", applyTheme);
	}

	if (themeBtn) {
		themeBtn.addEventListener("click", () => {
			isDark = !isDark;
			applyTheme();
		});
	}

	//random number buton
	const randBtn = document.getElementById("rand-btn");
	const box = document.getElementById("box");
	if (randBtn && box) {
		randBtn.addEventListener("click", () => {
			box.textContent = c[Math.random() * c.length | 0];
		});
	}

	//menu buton
	const menuBtn = document.getElementById("menu-button");
	const sidebar = document.getElementById("sidebar");
	if (menuBtn && sidebar) {
		menuBtn.addEventListener("click", () => {
			sidebar.classList.toggle("-translate-x-full");
			menuBtn.classList.toggle("translate-x-32");
		});
	}

});
