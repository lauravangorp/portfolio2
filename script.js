window.addEventListener("scroll", function() {
      let scrollPositiePx = window.pageYOffset;
      console.log(scrollPositiePx);
      if (scrollPositiePx > 160) {
            document.querySelector("header").classList.add("fixed");
      } else {
            document.querySelector("header").classList.remove("fixed");
      };
})

let hamburgerIcon = document.querySelector("header div.hamburger");
let header = document.querySelector("header");

hamburgerIcon.addEventListener("click", function () {
	this.classList.toggle("actief");
	header.classList.toggle("uitgeklapt");
})

let darkLink = document.querySelectorAll("nav a")[0];
let lightLink = document.querySelectorAll("nav a")[1];
let mijnCSS = document.querySelector("#switchcss");

darkLink.addEventListener("click", function () {
	mijnCSS.setAttribute("href","style.css");
});

lightLink.addEventListener("click", function () {
	mijnCSS.setAttribute("href","white/style.css");
});
