// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the cat image element
  var catImage = document.querySelector(".cat img");

  // Function to toggle animation classes
  function toggleAnimations() {
    if (catImage.classList.contains("rotate")) {
      catImage.classList.remove("rotate");
      catImage.classList.add("fade");
    } else if (catImage.classList.contains("fade")) {
      catImage.classList.remove("fade");
    } else {
      catImage.classList.add("rotate");
    }
  }

  // Add click event listener to the cat image
  catImage.addEventListener("click", toggleAnimations);
});

document.addEventListener("DOMContentLoaded", function () {
  // Assuming the previous cat image code is here

  // Get the "Our Projects" heading element
  var projectsHeading = document.querySelector(".projects-container h2");

  // Function to apply animation class
  function animateHeading() {
    // Add the animation class
    projectsHeading.classList.add("scale-up-and-change-color");

    // Remove the class after the animation ends to allow re-triggering
    projectsHeading.addEventListener("animationend", function () {
      projectsHeading.classList.remove("scale-up-and-change-color");
    });
  }

  // Add click event listener to the projects heading
  projectsHeading.addEventListener("click", animateHeading);
});
