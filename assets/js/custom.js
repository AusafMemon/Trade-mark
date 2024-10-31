    // Function to count up to a target value
    function countUp(target, elementId, duration) {
        let start = 0;
        let end = target;
        let increment = Math.ceil(end / (duration / 30)); // Increment based on duration
        let current = start;

        const counter = setInterval(function () {
            current += increment;
            if (current >= end) {
                clearInterval(counter);
                current = end;  // Ensure it ends exactly at the target value
            }
            document.getElementById(elementId).textContent = current.toLocaleString(); // Display number with commas
        }, 30); // Update every 30ms
    }

    // Start the counters as soon as the page loads
    window.onload = function () {
        countUp(120000, "counter1", 2000); // Count up to 120,000 (120k) in 2 seconds
        countUp(3500, "counter2", 2000);   // Count up to 3,500 in 2 seconds
        countUp(4900, "counter3", 2000);   // Count up to 4,900 in 2 seconds
    };

    const slider = document.querySelector('.slider');

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && slider.append(items[0])
      e.target.matches('.prev') && slider.prepend(items[items.length-1]);
    }
    
    document.addEventListener('click',activate,false);


    var swiper = new Swiper(".mySwiper", {
        loop: true,  // Enable looping
    });
    
    // Add click event listeners for custom arrows
    document.querySelector('.next-arrow').addEventListener('click', function() {
        swiper.slideNext();  // Move to the next slide
    });
    
    document.querySelector('.prev-arrow').addEventListener('click', function() {
        swiper.slidePrev();  // Move to the previous slide
    });

    
  //   var swiper = new Swiper(".mySwiper", {
  //     navigation: {
  //         nextEl: ".next-arrow",
  //         prevEl: ".prev-arrow",
  //     },
  //     loop: true,
  // });


      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,  // Default number of slides visible
        spaceBetween: 30,  // Default space between slides
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
          320:{
            slidesPerView: 1,
                spaceBetween: 10
          },
            640: {  // At screen widths 640px and below
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {  // At screen widths 768px and below
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {  // At screen widths 1024px and below
                slidesPerView: 3,
                spaceBetween: 30
            },
            1280: {  // At screen widths 1280px and above
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    // Add click event listeners for swiper2 custom arrows
    document.querySelector('.swiper2-next').addEventListener('click', function() {
        swiper2.slideNext();  // Move to the next slide
    });
    
    document.querySelector('.swiper2-prev').addEventListener('click', function() {
        swiper2.slidePrev();  // Move to the previous slide
    });
    

    
        




        
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(this.getAttribute('data-bs-target'));

            if (target.classList.contains('show')) {
                target.classList.remove('show');
                target.style.height = '0px';
            } else {
                target.classList.add('show');
                target.style.height = target.scrollHeight +
                    'px'; // Set the height dynamically based on content
            }
        });
    });



    // Cursor pointer

function mousemoveHandler(e) {
    try {
      const target = e.target;
  
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
  
  
      // Main Cursor Moving 
  
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")
  
    } catch (error) {
      console.log(error)
    }
  
  }
  document.addEventListener("mousemove", mousemoveHandler);


 


  $('#show-menu').click(function(){
    $('.Responsive-menu').addClass('active');
   });
   
   $('#close-menu').click(function(){
     $('.Responsive-menu').removeClass('active');
   });
  
  $('Responsive-links').click(function(){
    $(this).addClass('active');
    $(this).siblings('.Responsive-menu').removeClass('active');
  });
  
  $('.Responsive-links ul li').click(function(){
    // $('.Responsive-links ul li ul').not($(this).next()).slideUp();
    $(this).children('ul').slideToggle();
  });
  
  // Cursor pointer






    



  
