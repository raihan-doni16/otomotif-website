const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === slideIndex);
  });

  currentSlide = slideIndex;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3); // Ganti slide setiap 3 detik

showSlide(currentSlide);

if (localStorage.getItem("theme") === "dark") {
  setDarkMode();
  if (document.getElementById("switchCheckbox").checked) {
    localStorage.setItem("checkbox", true);
  }
}

function setDarkMode() {
  let isDark = document.body.classList.toggle("darkmode");
  if (isDark) {
    document.getElementById(".switchCheckbox").checked = true;
    localStorage.setItem("theme", "dark");
    document
      .getElementById(".switchCheckbox")
      .setAttribute("checked", "checked");
  } else {
    document.getElementById(".switchCheckbox").checked = false;
    localStorage.removeItem("theme", "dark");
  }
}

//
