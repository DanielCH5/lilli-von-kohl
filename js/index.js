const images = document.querySelectorAll(".drop-image");
let index = 0;
let currentImageIndex = 0;

images.forEach((img, i) => {
  // This line generates a random rotation value between -5 and 5 degrees:
  const rot = (Math.random() * 10 - 5).toFixed(2);
  img.style.setProperty("--rot", rot + "deg");
  img.style.zIndex = i;
});

function dropNext() {
  if (index >= images.length) {
    clearInterval(dropTimer);
    initializeSlideshow();
    return;
  }
  images[index].classList.add("drop-image--land");
  index++;
}

setTimeout(dropNext, 700);

// Remaining images drop every 2000ms after the first
const dropTimer = setInterval(() => {
  if (index < images.length) {
    dropNext();
  } else {
    clearInterval(dropTimer);
    showSlideshowButtons();
  }
}, 1200);
function showSlideshowButtons() {
  document
    .querySelectorAll(".slideshow-btn")
    .forEach((btn) => (btn.style.display = "flex"));
}
function initializeSlideshow() {
  const dotsContainer = document.querySelector(".slideshow-dots");

  // Create dots for each image
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slideshow-dot" + (i === 0 ? " active" : "");
    dot.onclick = (e) => {
      e.preventDefault();
      goToSlide(i);
    };
    dotsContainer.appendChild(dot);
  });

  currentImageIndex = 0;
  showSlide(0);
}

function showSlide(n) {
  const dots = document.querySelectorAll(".slideshow-dot");

  // Set z-index for all images so only the current one shows
  images.forEach((img, i) => {
    img.style.zIndex = i === n ? 10 : i;
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === n);
  });

  currentImageIndex = n;
}

function nextSlide() {
  const nextIndex = (currentImageIndex + 1) % images.length;
  showSlide(nextIndex);
}

function previousSlide() {
  const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  showSlide(prevIndex);
}

function goToSlide(n) {
  showSlide(n);
}
