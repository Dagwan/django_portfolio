/* portfolio/static/js/home.js */

// Scroll to top button
window.addEventListener("scroll", function () {
    var backToTopButton = document.querySelector(".back-to-top");
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });
  
  // Smooth scroll animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  