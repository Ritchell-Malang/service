let slides = document.querySelectorAll(".slide");

function showSlide(index) {

  // show correct slide
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  // update ALL dot buttons in ALL slides
  let allDotGroups = document.querySelectorAll(".dotbtn");

  allDotGroups.forEach(group => {

    let dots = group.querySelectorAll(".dot");

    dots.forEach(dot => dot.classList.remove("active-dot"));

    if (dots[index]) {
      dots[index].classList.add("active-dot");
    }

  });
}

// default
showSlide(0);