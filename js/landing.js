document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const landing = document.getElementById("landing");

  setTimeout(() => {
    splash.style.display = "none";
    landing.classList.remove("hidden");
    initSlider();
  }, 3500);

  function initSlider() {
    const slides = document.querySelectorAll(".slider-card");
    const dots = document.querySelectorAll(".dot");
    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");
    let index = 0;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
      slides[i].classList.add("active");
      dots[i].classList.add("active");
    }

    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 5000);

    showSlide(index);
  }
});
