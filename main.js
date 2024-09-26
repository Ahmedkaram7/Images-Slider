// let images = document.querySelectorAll(".slider-container img");
// create array form images in slider-container
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

let sliderNubmer = document.getElementById("slider-nubmer");
let previousButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let indecators = document.getElementById("indecators");

let lengthIamges = sliderImages.length;
let currentIndex = 1;
// sliderNubmer.innerHTML = `Number ${lengthIamges}`;

// indecators number create span and add in the indecators
function indecator() {
  for (let i = 0; i < lengthIamges; i++) {
    let span = document.createElement("span");
    span.setAttribute("num", i + 1);

    span.innerHTML = i + 1;
    indecators.appendChild(span);
  }
}
indecator(); // indecators number

function showSlide() {
  // number image in top
  sliderNubmer.textContent = `Number #${currentIndex} of ${lengthIamges}`;

  removeAllActive(); // remove all classes form images and indecators

  sliderImages[currentIndex - 1].classList.add("active"); // add class active in current index on images

  let indecatorSpan = document.querySelectorAll(".indecators span");
  indecatorSpan[currentIndex - 1].classList.add("active"); // add class active in current index on indecators span

  //  check if current index is the first
  if (currentIndex === 1) {
    previousButton.classList.add("disabled");
  } else {
    previousButton.classList.remove("disabled");
  }

  //  check if current index is the last
  if (currentIndex === lengthIamges) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// create array from span in indecators
let indecatorBullets = Array.from(document.querySelectorAll(".indecators span"));

// function to remove all classes form images and span indecators
function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  indecatorBullets.forEach((span) => {
    span.classList.remove("active");
  });
}
//  Buttons
for (let i = 0; i < indecatorBullets.length; i++) {
  indecatorBullets[i].addEventListener("click", function () {
    currentIndex = parseInt(this.getAttribute("num"));
    showSlide();
  });
}

function previousSlide() {
  if (!previousButton.classList.contains("disabled")) {
    currentIndex--;
    showSlide();
  }
}

function nextSlide() {
  if (!nextButton.classList.contains("disabled")) {
    currentIndex++;
    showSlide();
  }
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

showSlide();
