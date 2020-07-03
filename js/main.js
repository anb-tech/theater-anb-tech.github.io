$(function(){
	$('.header__burger').click(function(event){
		$('.header__burger').toggleClass('active')
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

/*	$('.slider-arrow__left').on('mouseover', function(){
		$('.header__slider').slick('slickPrev');
	});
	$('.slider-arrow__left').on('mouseout', function(){
		$('.header__slider').slick('slickNext');
	});
	*/

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

	$('.products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1
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