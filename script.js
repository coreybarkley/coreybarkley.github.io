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

	const saved = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	if (saved === "dark" || (!saved && prefersDark)) {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}

	const randBtn = document.getElementById("rand-btn");
	const box = document.getElementById("box");
	if (randBtn && box) {
		randBtn.addEventListener("click", () => {
			box.textContent = c[Math.random() * c.length | 0];
		});
	}

	const themeBtn = document.getElementById("theme-toggle");
		if (themeBtn) {
			themeBtn.textContent = document.body.classList.contains("dark")
				? "Light Mode"
				: "Dark Mode";

			themeBtn.addEventListener("click", () => {
				document.body.classList.toggle("dark");
				const isDark = document.body.classList.contains("dark");
				themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
				localStorage.setItem("theme", isDark ? "dark" : "light");
			});
		}

		const sidebar = document.getElementById("sidebar");
		const menuBtn = document.getElementById("menu-button");

		if (menuBtn && sidebar) {
			menuBtn.addEventListener("click", () => {
				sidebar.classList.toggle("-translate-x-full");
				menuBtn.classList.toggle("translate-x-32");
			});
		}

	});
