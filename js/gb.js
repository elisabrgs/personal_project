const fScrollTo = (iIntPosition) => {
  window.scroll({
    top:iIntPosition,
    behavior:'smooth'
  })
};


$(window).on( "load", function() {

	const $window = $(window);
	const img = $('img.homepage');
	const flWHeight = $window.height();
	const flIHeight = img.height();
	const flScroll = 0 - ((flWHeight - flIHeight) / 2.5);

	fScrollTo(flScroll);

	// $(".arrow").click(function() {
	//     $window.scrollTop += $window.pageYOffset + 300;
	//  });

});

// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//         $(this).toggleClass('active');
//     });
// });

// var $window = $(window),	
// $element = $('img.homepage'),
// elementTop = $element.offset().top,
// elementHeight = $element.height(),
// viewportHeight = $window.height(),
// scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);

// $window.scrollTop(scrollIt);


const fScroll = (iBlnUp) => {

    let position;
    if (iBlnUp) {
        position = 0;
    } else {
        const img = $('img.homepage');
        position = img.height();
    }

    // const scrollY = window.scrollY;
    // // for (let i = scrollY; i <= flIHeight; i++) {
    //     window.scroll({top: flIHeight, behavior: 'smooth' });
    // // }

    $('html,body').animate({
        scrollTop: position
    }, 1000);
};
        




