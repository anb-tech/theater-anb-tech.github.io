$(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__slider').slick({
		infinite: true,
		prevArrow: false,
		nextArrow: false
	});

	$('.slider-arrow__left').on('click', function(){
		$('.header__slider').slick('slickPrev');
	});
	$('.slider-arrow__right').on('click', function(){
		$('.header__slider').slick('slickNext');
	});


	$('.slider-arrow__left').hover(
		function () {
			$(this).addClass('slider-arrow__left--hover');
		},
		function () {
			$(this).removeClass('slider-arrow__left--hover');
		}
		);

	$('.slider-arrow__right').hover(
		function () {
			$(this).addClass('slider-arrow__right--hover');
		},
		function () {
			$(this).removeClass('slider-arrow__right--hover');
		}
		);

	if (window.matchMedia("(max-width: 992px)").matches) {
		$('.products-slider').slick({
			prevArrow: false,
			nextArrow: false,
			slidesToShow: 2,
			slidesToScroll: 1
		});
	} else{
		$('.products-slider').slick({
			prevArrow: false,
			nextArrow: false,
			slidesToShow: 4,
			slidesToScroll: 1
		});
	}

	$('.slider-arrow__left').on('click', function(){
		$('.products-slider').slick('slickPrev');
	});
	$('.slider-arrow__right').on('click', function(){
		$('.products-slider').slick('slickNext');
	});


	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function(){
				tr.trigger("reset");
			}, 1000);
		});
		return false;
	});

});