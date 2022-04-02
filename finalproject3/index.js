
	document.addEventListener("DOMContentLoaded", function(){
		
		el_autohide = document.querySelector('.autohide');
		
		// add padding-top to bady (if necessary)
		navbar_height = document.querySelector('.navbar').offsetHeight;
		document.body.style.paddingTop = navbar_height + 'px';

		if(el_autohide){
			
			var last_scroll_top = 0;
			window.addEventListener('scroll', function() {
	       		let scroll_top = window.scrollY;
		       if(scroll_top < last_scroll_top) {
		            el_autohide.classList.remove('scrolled-down');
		            el_autohide.classList.add('scrolled-up');
		        }
		        else {
		            el_autohide.classList.remove('scrolled-up');
		            el_autohide.classList.add('scrolled-down');
		        }
		        last_scroll_top = scroll_top;

			});
			// window.addEventListener

		}
		// if
		
	});
	// DOMContentLoaded  end


	document.addEventListener("DOMContentLoaded", function(){

		document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
			
			everydropdown.addEventListener('shown.bs.dropdown', function () {
				el_overlay = document.createElement('span');
	        	el_overlay.className = 'screen-darken';
	        	document.body.appendChild(el_overlay)
			});

			everydropdown.addEventListener('hide.bs.dropdown', function () {
				document.body.removeChild(document.querySelector('.screen-darken'));
			});

		});

	});
	
	
	
	document.addEventListener("DOMContentLoaded", function(){
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
        	element.addEventListener('click', function (e) {
        		e.stopPropagation();
        	});
        })
    });
	// DOMContentLoaded  end
	
	
	
	document.addEventListener("DOMContentLoaded", function(){
	        /////// Prevent closing from click inside dropdown
	        document.querySelectorAll('.dropdown-menu').forEach(function(element){
	        	element.addEventListener('click', function (e) {
	        		e.stopPropagation();
	        	});
	        })
	    });
		// DOMContentLoaded  end
	






      var swiper = new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            loop: true,
            // pagination: {
            //   el: 'swiper-pagination',
            // },
        });








