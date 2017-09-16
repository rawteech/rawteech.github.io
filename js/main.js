(function ($) {
   "use strict";

/*--------------------------
preloader
---------------------------- */	
    var pre_load = $(window);
    pre_load.on("load",function() {
        var pre_loader = $('#preloader')
        pre_loader.fadeOut('slow',function(){$(this).remove();});
    });	

/*---------------------
  venobox
--------------------- */
    var veno_box = $('.venobox');
    veno_box.venobox();

/*----------------------------
 Header Images
------------------------------*/
	var header_img = $(".header-img");
	   header_img.height($(window).height());
		$(window).on('resize',function(){
		$(".header-img").height($(window).height());
	});	
    
/*----------------------------
 Navbar nav
------------------------------ */

    var menu_btn = $('.menu-btn');
    menu_btn.on("click", function () {
        $(this).toggleClass("active");
        $(".icon-header").toggleClass("active");
    });
    
    
/*---------------------
 TOP Menu Stick
--------------------- */
    var s = $("#sticker");
    var pos = s.position();					   
    $(window).on('scroll', function() {
        var windowpos = $(window).scrollTop() >300;
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");	
        }
    });
	

/*----------------------------
 Navbar nav
------------------------------ */
	var main_menu = $(".main-menu ul.navbar-nav li ");
	  main_menu .on('click', function(){
		 main_menu .removeClass("active");
		$(this).addClass("active");
	});	

/*----------------------------
 Scrollspy js
------------------------------ */
	var Body = $('body');
	Body.scrollspy({
		target: '.navbar-collapse',
		offset: 80
	});


/*---------------------
 Testimonial carousel
---------------------*/
	var test_carousel = $('.testimonial-carousel');
	test_carousel.owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		autoplay:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
/*----------------------------
Page Scroll
------------------------------ */
    var page_scroll = $('a.page-scroll');
	page_scroll.on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 80
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 
/*----------------------------
 Menu hide
------------------------------ */
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    }); 

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
    
/*----------------------------
 isotope active
------------------------------ */
    var portfolio_item = $(window);
    portfolio_item.on("load",function() {
        var $container = $('.awesome-project-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        var pro_menu = $('.project-menu li a');
        pro_menu.on("click", function() {
            var pro_menu_active = $('.project-menu li a.active');
            pro_menu_active.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end

	//portfolio end
/*----------------------------
    Contact form
------------------------------ */
	$("#contactForm").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		} else {
			event.preventDefault();
			submitForm();
		}
	});
	function submitForm(){
		var name = $("#name").val();
		var email = $("#email").val();
		var msg_subject = $("#msg_subject").val();
		var message = $("#message").val();


		$.ajax({
			url: "https://www.enformed.io/vbbnar7f",
			method: "POST",
			dataType: "json",
			accepts: "application/json",
			data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
			success : function(){
				formSuccess();
			},
			error: function() {
				formError();
			}
		});
	}


	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Thank you. I will get back to you soon!")
	}

	function formError(){
		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

})(jQuery);