const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});

function copyTokenKey() {
	const tokenKey = document.getElementById("token-key").innerText;
	navigator.clipboard.writeText(tokenKey).then(() => {
		const copyButton = document.getElementById("copy-button");
		copyButton.innerText = "✓";
		copyButton.classList.add("copied");
	});
}

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
