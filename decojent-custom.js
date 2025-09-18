document.addEventListener("DOMContentLoaded", () => {
 $('.slider-custom').slick({
    	infinite: true,
    	autoplay: false,
    	dots: false,
    	arrows: true,
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	prevArrow: '.custom-slider-arrow.prev-slide',
    	nextArrow: '.custom-slider-arrow.next-slide',
		responsive: [
      		{
        		breakpoint: 991,
        		settings: {
          			slidesToShow: 1,
					speed: 600,
        		}
      		},
    	]
	});
  function waitforloading() { 
	
	//CLIENT TESTIMONIALS COMPONENTS CUSMTOM JS START
	
	

	//close
	
	
	//CLIENT TESTIMONIALS COMPONENTS CUSMTOM JS END

	
	//footer email copy to clipboard
	const ficon = document.getElementById("copy-email-footer");
    const ftooltip = document.querySelector(".email-coppied-message.footer-copy-email");
    ficon.addEventListener("click", function() {
      const email = ficon.getAttribute("data-email");
      navigator.clipboard.writeText(email).then(function() {
        ftooltip.style.opacity = "1";
        setTimeout(() => {
          ftooltip.style.opacity = "0";
        }, 1000); // 1 second
      }, function(err) {
        console.error("Error:", err);
      });
    });
	
	//FORM COMPONENT JS START
	//copy to clipboard js form
	const icon = document.getElementById("copy-email");
    const tooltip = document.querySelector(".email-coppied-message");
    icon.addEventListener("click", function() {
      const email = ficon.getAttribute("data-email");
      navigator.clipboard.writeText(email).then(function() {
        tooltip.style.opacity = "1";
        setTimeout(() => {
          tooltip.style.opacity = "0";
        }, 1000); // 1 second
      }, function(err) {
        console.error("Error:", err);
      });
    });	


	//checkboxes values
	// Select the checkbox
    var sassCheckBox = document.querySelector('#sass-checkbox');
    var webDesignCheckBox = document.querySelector('#web-design');
    var appDesignCheckBox = document.querySelector('#app-design');
    var brandingCheckBox = document.querySelector('#branding');
    var animationCheckBox = document.querySelector('#animation');
    var developmentCheckBox = document.querySelector('#development');
    var illustrationCheckBox = document.querySelector('#illustration');
    var otherCheckBox = document.querySelector('#other');
    


    // Add a custom value
    if (sassCheckBox) {
      sassCheckBox.setAttribute('value', 'SaaS Design');
    }
		if (webDesignCheckBox) {
      webDesignCheckBox.setAttribute('value', 'Website Design');
    }
    if (appDesignCheckBox) {
      appDesignCheckBox.setAttribute('value', 'App Design');
    }
    if (brandingCheckBox) {
      brandingCheckBox.setAttribute('value', 'Branding');
    }
    if (animationCheckBox) {
      animationCheckBox.setAttribute('value', 'Animation');
    }
    if (developmentCheckBox) {
      developmentCheckBox.setAttribute('value', 'Web Development');
    }
    if (illustrationCheckBox) {
      illustrationCheckBox.setAttribute('value', 'Illustration');
    }
    if (otherCheckBox) {
      otherCheckBox.setAttribute('value', 'Other');
    }
				

    const form = document.querySelector('#wf-form-Decojent-Contact-Form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"][name="services"]');
    const hiddenField = document.getElementById('selected_services');

    if (!form || !hiddenField) {
      console.warn('Form or hidden field not found.');
      return;
    }

    form.addEventListener('submit', function(event) {
      const selected = [];

      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          selected.push(checkbox.value);  // Collect checked values
        }
      });

      if (selected.length > 0) {
        hiddenField.value = selected.join(', '); // Comma-separated values
      } else {
        hiddenField.value = ''; // Empty value if no checkboxes are checked
      }

      // Debug logs
      console.log('Selected services:', selected);  // Log selected services
      console.log('Hidden field value:', hiddenField.value);  // Log hidden field value

    });
		
    //prevent scrolling
	const wfform = document.getElementById("wf-form-Decojent-Contact-Form");
    const formContainer = document.querySelector("#contact-section");
    const successMessage = document.querySelector("#wf-contact-form .w-form-done");

    if (wfform && successMessage && formContainer) {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (
            mutation.attributeName === "style" &&
            window.getComputedStyle(successMessage).display === "block"
          ) {
            formContainer.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      observer.observe(successMessage, { attributes: true });
    }
	//FORM COMPONENT CUSTOM CODE END
	
	//ACCORDION JS START
	
	//accordion functionality
	document.querySelectorAll('.accordion-header').forEach(header => {
  		header.addEventListener('click', () => {
      		const accordion = header.parentElement;
      		const panel = accordion.querySelector('.accordion-panel');
      		const isOpen = panel.style.height && panel.style.height !== "0px";

      	// Close all others (optional: remove this block if you want multiple open)
      	document.querySelectorAll('.accordion-panel').forEach(p => {
        	if (p !== panel) {
          		p.style.height = '0px';
          		const h = p.previousElementSibling;
          		h.querySelector('.accordion-open-icon').style.display = 'block';
          		h.querySelector('.accordion-close-icon').style.display = 'none';
        	}
     	});

      	if (!isOpen) {
        	// Open panel
        	panel.style.height = panel.scrollHeight + "px";
        	header.querySelector('.accordion-close-icon').style.display = 'block';
        	header.querySelector('.accordion-open-icon').style.display = 'none';

        	// Reset height to auto after transition
        	panel.addEventListener('transitionend', function handler() {
          		panel.style.height = 'auto';
          		panel.removeEventListener('transitionend', handler);
        	});
      	} else {
        	// Collapse panel
        	panel.style.height = panel.scrollHeight + "px"; // set to current height for transition
        	requestAnimationFrame(() => {
          		panel.style.height = "0px";
        	});
        	header.querySelector('.accordion-close-icon').style.display = 'none';
        	header.querySelector('.accordion-open-icon').style.display = 'block';
      	}
    	});
  	});	

	//ACCORDION JS END



	// Initialize Lenis
	//const lenis = new Lenis({
  	//	autoRaf: true,
	//});


  
	if (
  		window.location.pathname === '/work/technehire' ||
		window.location.pathname === '/work/innago' ||
  		window.location.pathname === '/work/limeflight' ||
  		window.location.pathname === '/work/ai-writer' ||
		window.location.pathname === '/work/eletive' ||
  		window.location.pathname === '/work/cookingenie' ||
  		window.location.pathname === '/work/yetanotherpage'

	) {
  		var element = document.querySelector('.container');
  		if (element) {
    		element.classList.remove('container-1280');
  		}
	}

	if(window.location.pathname === '/work' || window.location.pathname === '/pitch-decks'){
		var navigation = document.querySelector('.navigation');
  		if(navigation){
			navigation.style.backgroundColor = "#f8fafc";    
    	}
	}

  }
	
  setTimeout(waitforloading, 3000);
  
});

//window.addEventListener('beforeunload', function () {
  //		document.body.style.display = 'none';
  	//	window.scrollTo(0, 0);
//});
window.addEventListener('beforeunload', function (e) {
    // Find the active element (the thing that triggered navigation)
    var activeEl = document.activeElement;
    var href = activeEl && activeEl.href ? activeEl.href : '';

    // Skip hiding for mailto: or tel: links
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
    }

    // Your unload effect
    document.body.style.display = 'none';
    window.scrollTo(0, 0);
});


  