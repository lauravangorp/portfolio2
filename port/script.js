// hier komt je code
// console.log("Hallo wereld!");

// fixed header
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

/*

let iso = new Isotope( '.categorie', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});


// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}

// filter functions
var filterFns = {
  // show if number is greater than 50
  OnderDe6: function( itemElem ) {
    var number = itemElem.querySelector('.prijs').textContent;
    return parseInt( number, 10 ) < 7;
  },

};

// bind filter button click
var filtersElem = document.querySelector('#filters');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
*/
