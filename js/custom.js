	(function($) {
	"use strict"

// Page Preloader
	$(window).load(function() {
		$(".loader").delay(300).fadeOut();
		$(".animationload").delay(600).fadeOut("slow");
	});
	
// Header Effect
	$(".header").affix({
		offset: {
			top: 100, 
			bottom: function () {
			return (this.bottom = $('.copyright').outerHeight(true))
			}
		}
	})
		
// Smooth Scroll
	smoothScroll.init({
		speed: 1000, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 1, // Integer. How far to offset the scrolling anchor location in pixels
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});	

// Parallax
	$(window).bind('load', function() {
		parallaxInit();
	});
	
	function parallaxInit() {
		$('#skills_parallax').parallax("30%", 0.1);
		$('#count_parallax').parallax("30%", 0.1);
		$('#video_parallax').parallax("30%", 0.1);
		$('#featured_parallax').parallax("90%", 0.1);
	}
	
// Skills
	$('.chart').easyPieChart({
		easing: 'easeOutBounce',
		size : 175,
		animate : 2000,
		lineCap : 'square',
		lineWidth : 10,
		barColor : false,
		trackColor : '#F7C221',
		scaleColor : false,
		onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent)+'%');
		}
	});
	
// Carousel
    $(document).ready(function() {
    var owl = $("#testimonial");
    owl.owlCarousel({
    items : 1, //10 items above 1000px browser width
    itemsDesktop : [1000,1], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,1], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0
	navigation : false,
	pagination : false,
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
     
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    });
	
	
	$("#owl-testimonial-widget, #owl-blog").owlCarousel({
		items : 1,
		lazyLoad : true,
		navigation : true,
		pagination : false,
		autoPlay: false
    });

// Home Intro
	$("#owl-intro").owlCarousel({
    items : 1, //10 items above 1000px browser width
    itemsDesktop : [1000,1], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,1], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		pagination : false,
	});
	
// Coun
	function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */    
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {    
                setTimeout(function(){count($this)}, 50);
            }
        }            
        $(".stat-count").each(function() {
          $(this).data('count', parseInt($(this).html(), 10));
          $(this).html('0');
          count($(this));
        });
		
		
	

	
// TOOLTIP
    $('.social-icons, .bs-example-tooltips').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })
	

		
// Google Map
	var locations = [
		['<div class="infobox"><h3 class="title"><a href="#contact">TOIMISTOMME</a></h3><span>ETELÄESPLANADI 16</span><br>0295 16001</p></div></div></div>', 60.1670218,24.9468678, 1]
		];
	
		var map = new google.maps.Map(document.getElementById('map'), {
			
		  zoom: 19,
			scrollwheel: false,
			navigationControl: true,
			mapTypeControl: false,
			scaleControl: false,
			draggable: true,
			styles: [ { "stylers": [ { "hue": "#428ae6" },  {saturation: 100},
                {gamma: 1} ] } ],
			center: new google.maps.LatLng(60.167417, 24.944690),
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		});
	
		var infowindow = new google.maps.InfoWindow();
	
		var marker, i;
	
		for (i = 0; i < locations.length; i++) {  
	  
			marker = new google.maps.Marker({ 
			position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
			map: map ,
			icon: 'images/location.png'
			});
	
	
		  google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			  infowindow.setContent(locations[i][0]);
			  infowindow.open(map, marker);
			  
			}
		  })(marker, i));
		}
		
		 $("a[href='#tab2']").on('shown.bs.tab', function(){
  		google.maps.event.trigger(map, 'resize');
		});
		  
			
	})(jQuery);	


$(document).ready(function(){
    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});

