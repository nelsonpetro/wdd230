function toggleMenu() {
	document.querySelector(".navbar").classList.toggle("open");
	document.querySelector(".hamburger").classList.toggle("open");			
}

const x = document.querySelector(".hamburger");

x.onclick = toggleMenu;