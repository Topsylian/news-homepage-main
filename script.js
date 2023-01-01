let heroLink = document.querySelector(".hero-link");

function myFunc(x) {
		if (x.matches) {
			const home = document.getElementById("hero");
			home.src = "image-web-3-mobile.jpg";
		} else {
			home.src = "image-web-3-desktop.jpg";
		}
}
let x = window.matchMedia("(max-width: 440px)");
myFunc(x);
x.addListener(myFunc);

const saver = heroLink.innerHTML;
const saVer = saver.toUpperCase();
heroLink.innerHTML = saVer;

console.log(hero);