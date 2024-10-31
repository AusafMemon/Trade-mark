<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>  
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="js/script.js"></script> 
<script src="assets/js/custom.js"></script> 


<script>
    var swiper3 = new Swiper(".mySwiper3", {
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
</script>

<script>
// Add event listener to collapse
     document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', function () {
            // Get the accordion icon within the clicked button
            const icon = this.querySelector('.accordion-icon i');

            // Toggle the icon when the accordion opens or closes
            const isCollapsed = this.classList.contains('collapsed');
            icon.classList.toggle('fa-plus', isCollapsed); // Show plus icon when collapsed
            icon.classList.toggle('fa-minus', !isCollapsed); // Show minus icon when expanded
        });
    });
</script>


<script>
// JavaScript to make the header fixed on scroll
    document.addEventListener("DOMContentLoaded", function() {
      const header = document.querySelector(".main-header");
      const fixedOffset = header.offsetTop; // Position from where to fix the header

      window.addEventListener("scroll", function() {
          if (window.scrollY > fixedOffset) {
              header.classList.add("fixed-header");
          } else {
              header.classList.remove("fixed-header");
          }
      });
  });
 
</script>



<script>
const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

document.querySelector('.next-slide').addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
 
</script>














