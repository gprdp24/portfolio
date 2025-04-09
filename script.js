$(document).ready(function () {
	// === Theme Toggle ===
	$('#themeToggle').on('change', function () {
		$('body').toggleClass('dark-mode');
		$('#themeLabel').text(
			$(this).is(':checked') ? 'Dark Mode' : 'Light Mode'
		);
	});

	// === jQuery UI Widgets ===
	$( '.accordion' ).accordion( {
		collapsible: true,
	});
	$('.skills-tabs').tabs();

	// === jQuery UI Interaction ===
	$('#draggable').draggable();

	// === Form Validation ===
	$('#contactForm').validate({
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true,
			},
			message: 'required',
		},
		messages: {
			name: 'Please enter your name',
			email: 'Please enter a valid email address',
			message: 'Please enter your message',
		},
	});

	// === AJAX: Fetch Motivational Quote ===
	fetch('https://api.quotable.io/random')
		.then((response) => response.json())
		.then((data) => {
			$('#quoteText').text(`\"${data.content}\" — ${data.author}`);
		})
		.catch(() => {
			$('#quoteText').text('Could not load quote.');
		});

	// === Slick Carousel Plugin ===

	  $('.slick-carousel').slick({
			arrows: true, // show prev/next arrows
			dots: true, // show dots navigation
			infinite: true,
			slidesToShow: 1, // how many images at once
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
		});
	// === Fade-In on Scroll ===
	function revealOnScroll() {
		$('.fade-in-on-scroll').each(function () {
			const elementTop = $(this).offset().top;
			const scrollTop = $(window).scrollTop();
			const windowHeight = $(window).height();

			if (elementTop < scrollTop + windowHeight - 50) {
				$(this).addClass('visible');
			}
		});
	}

	$(window).on('scroll', revealOnScroll);
	revealOnScroll(); // Trigger on load
});
