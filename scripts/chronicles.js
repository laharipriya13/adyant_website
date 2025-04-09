const track = document.getElementById("track");
  const slides = document.querySelectorAll(".slide");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const carouselSection = document.getElementById("carouselSection");
  const nextSection = document.getElementById("nextSection");

  let currentSlide = 0;
  let isScrolling = false;
  const slideWidth = 420;
  const totalSlides = slides.length;

  function updateText(index) {
    const slide = slides[index];
    if (slide) {
      title.innerText = slide.dataset.title;
      desc.innerText = slide.dataset.text;
    }
  }

  function scrollSlide(direction) {
    if (direction > 0 && currentSlide < totalSlides - 1) {
      currentSlide++;
    } else if (direction < 0 && currentSlide > 0) {
      currentSlide--;
    }

    const offset = -currentSlide * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    updateText(currentSlide);

    if (currentSlide === totalSlides - 1 && direction > 0) {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 500);
    }
  }

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const isInCarousel = window.scrollY < 10;

    if (isInCarousel || (currentSlide > 0 && direction < 0)) {
      e.preventDefault();
      scrollSlide(direction);
    }

    isScrolling = true;
    setTimeout(() => isScrolling = false, 700);
  }, { passive: false });

  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight / 2 && currentSlide === totalSlides - 1) {
      document.body.style.overflow = "hidden";
      currentSlide--;
      scrollSlide(-1);
    }
  });

  window.addEventListener("load", () => {
    updateText(0);
    document.body.style.overflow = "hidden";
  });