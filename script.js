$(document).ready(function () {
	// === Theme Toggle ===
	$('#themeToggle').on('change', function () {
		$('body').toggleClass('dark-mode');
		$('#themeLabel').text(
			$(this).is(':checked') ? 'Dark Mode' : 'Light Mode'
		);
	});

	// === jQuery UI Widgets ===
	$('.accordion').accordion();
	$('#skills-tabs').tabs();

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

	// === Smooth Scroll ===
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top,
			},
			600
		);
	});

	// === Fade-In on Scroll ===
	function revealOnScroll() {
		$('.fade-in').each(function () {
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
