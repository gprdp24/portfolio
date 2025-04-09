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

	function fetchQuote() {
		$('#quoteText').text('Loading...');
		$('#quoteAuthor').text('');

		$.ajax({
			method: 'GET',
			url: 'https://api.api-ninjas.com/v1/quotes',
			headers: {
				'X-Api-Key': 'yDyj9gH3X3Y84i3/jgMkSw==ChdrOKCS0o1M5ln0',
			},
			contentType: 'application/json',
			success: function (result) {
				if (result && result.length > 0) {
					$('#quoteText').text(`"${result[0].quote}"`);
					$('#quoteAuthor').text(`— ${result[0].author}`);
				} else {
					$('#quoteText').text('No quotes found.');
				}
			},
			error: function (jqXHR) {
				console.error('Error: ', jqXHR.responseText);
				$('#quoteText').text('Failed to load quote. Please try again.');
			},
		});
	}
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

	// === Slide up or down on click ===
	$('#chase-tmnt').click(function() {
		if ($('#chase-carousel').is(':visible')) {
			$('#chase-carousel').slideUp();
		}
		else {
			$('#chase-carousel').slideDown();
			$('.slick-carousel').slick('setPosition');
		}
	});

	$('#wildie-west').click(function() {
		if ($('#tww-video').is(':visible')) {
			$('#tww-video').slideUp();
			$('#youtube').attr('src', '');
		}
		else {
			$('#youtube').attr('src', 'https://www.youtube.com/embed/zkI6ZQGWea4?start=0');
			$('#tww-video').slideDown();
		}
	});

	$(window).on('scroll', revealOnScroll);
	revealOnScroll(); // Trigger on load
});
