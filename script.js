$(document).ready(function () {
	// === Theme Toggle ===
	$('#themeToggle').on('change', function () {
		$('body').toggleClass('dark-mode');
		$('#themeLabel').text(
			$(this).is(':checked') ? 'Dark Mode' : 'Light Mode'
		);
	});
	// === jQuery UI Widgets ===
	$('.accordion').accordion({
		collapsible: true,
	});
	$('.skills-tabs').tabs();

	// === jQuery UI Interaction ===
	$('#CG2logo').draggable({
		containment: '#CG2Name',
	});

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

	$(document).ready(function () {
		// Fetch quote on page load
		fetchQuote();

		// Fetch new quote when button is clicked
		$('#newQuoteBtn').click(fetchQuote);
// This is displayed until the quote is fetched from the API
		function fetchQuote() {
			$('#quoteText').text('Loading...');
			$('#quoteAuthor').text('');
			// API Ninjas required me to sign up to get this one free
			// Make an AJAX GET request to the API Ninjas Quotes endpoint
			$.ajax({
				method: 'GET', // HTTP method used for the request
				url: 'https://api.api-ninjas.com/v1/quotes', // API endpoint to fetch a random quote
				headers: {
					// Required API key for authentication
					'X-Api-Key': 'yDyj9gH3X3Y84i3/jgMkSw==ChdrOKCS0o1M5ln0',
				},

				// Specify the type of data expected from the server
				contentType: 'application/json',

				success: function (result) {
					// Check if a valid result is returned and it contains at least one quote
					if (result && result.length > 0) {
						// Display the quote text and author in designated HTML elements
						$('#quoteText').text(`"${result[0].quote}"`);
						$('#quoteAuthor').text(`— ${result[0].author}`);
					} else {
						// Handle case where the response does not contain any quotes
						$('#quoteText').text('No quotes found.');
					}
				},
				// Callback function executed if the request fails
				error: function ( jqXHR ) {
					// Log the error details to the console for debugging
					console.error('Error: ', jqXHR.responseText);
					// Display a fallback message to inform the user of the failure
					$('#quoteText').text(
						'Failed to load quote. Please try again.'
					);
				},
			});
		}
	});

	// === Sortable Plugin, for sandwich ===

	$(function () {
		$('#sortable').sortable();
	});

	// === Slick Carousel Plugin ===

	$('.slick-carousel').slick({
		arrows: true, // show prev/next arrows
		dots: true, // show dots navigation
		infinite: true,
		slidesToShow: 1, // how many images at once
		slidesToScroll: 1,
		autoplay: true,
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

	// === Slide up or down on click  for chase ===
	$('#chase-tmnt').click(function () {
		if ($('#chase-carousel').is(':visible')) {
			$('#chase-carousel').slideUp();
		} else {
			$('#chase-carousel').slideDown();
			$('.slick-carousel').slick('setPosition');
		}
	});
	
	// === Slide up or down on click  for gerry ===
	$('.click-this').click(function (e) {
		if (e.target === this) {
			if ($('#gerry-carousel').is(':visible')) {
				$('#gerry-carousel').slideUp();
			} else {
				$('#gerry-carousel').slideDown();
				$('.slick-carousel').slick('setPosition');
			}
		}
	});
	
	// === Function to watch youtube video ===
	$('#wildie-west').click(function () {
		if ($('#tww-video').is(':visible')) {
			$('#tww-video').slideUp();
			$('#youtube').attr('src', '');
		} else {
			$('#youtube').attr(
				'src',
				'https://www.youtube.com/embed/zkI6ZQGWea4?start=0'
			);
			$('#tww-video').slideDown();
		}
	});

	$(window).on('scroll', revealOnScroll);
	revealOnScroll(); // Trigger on load
});
