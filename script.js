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
	const menuBtn = document.getElementById("menu-button");
	const sidebar = document.getElementById("sidebar");
	const randBtn = document.getElementById("rand-btn");
	const box = document.getElementById("box");
	const iframe = document.getElementById("shiny-frame");
	const baseShinyUrl = "https://coreybarkley.shinyapps.io/sudoku/";
	const saved = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const startDark = saved === "dark" || (!saved && prefersDark);

	document.body.classList.toggle("dark", startDark);

	if (themeBtn) {
		themeBtn.textContent = startDark ? "Light Mode" : "Dark Mode";
	}

	if (iframe) {
		iframe.src = baseShinyUrl + (startDark ? "?mode=dark" : "?mode=light")
	}

	if (themeBtn) {
		themeBtn.addEventListener("click", () => {
			document.body.classList.toggle("dark");
			const isDark = document.body.classList.contains("dark");
			themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
			localStorage.setItem("theme", isDark ? "dark" : "light");
			if (iframe) {
				iframe.src = baseShinyUrl + (isDark ? "?mode=dark" : "?mode=light")
			}
		});
	}

	if (randBtn && box) {
		randBtn.addEventListener("click", () => {
			box.textContent = c[Math.random() * c.length | 0];
		});
	}


	if (menuBtn && sidebar) {
		menuBtn.addEventListener("click", () => {
			sidebar.classList.toggle("-translate-x-full");
			menuBtn.classList.toggle("translate-x-32");
		});
	}

});
