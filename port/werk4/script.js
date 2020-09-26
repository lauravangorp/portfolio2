// hier komt je code
// console.log("Hallo wereld!");
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
