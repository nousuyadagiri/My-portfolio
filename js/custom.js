(function () {
  "use strict";

  // document.addEventListener("DOMContentLoaded", function() {
  //   // Get all the navigation links
  //   const navLinks = document.querySelectorAll(".nav-link");

  //   // Loop through the links and add a click event listener to each
  //   navLinks.forEach(function(link) {
  //     link.addEventListener("click", function(event) {
  //       // Remove the "active" class from all links
  //       navLinks.forEach(function(link) {
  //         link.classList.remove("active");
  //       });

  //       // Add the "active" class to the clicked link
  //       this.classList.add("active");
  //     });
  //   });
  // });

  /* Start: sticky-pin */
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("header");
  const scrollThreshold = 150; // Adjust this value as needed

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Iterate through navigation links
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const targetTop = targetElement.getBoundingClientRect().top;

      link.classList.toggle(
        "active",
        targetTop <= scrollThreshold &&
          targetTop + targetElement.clientHeight > scrollThreshold
      );

      link.addEventListener("click", (e) => {
        e.preventDefault();

        const yOffset = -60; // Offset to adjust the scroll position (e.g., to account for a sticky header)
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth", // Smooth scroll behavior
        });
      });
    });

    // Handle sticky header
    header.classList.toggle("sticky-pin", scrollPosition >= scrollThreshold);
  });

  /* End: sticky-pin */

  /* Start: scrolltopup */
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  // Add a click event listener to the button
  scrollToTopButton.addEventListener("click", () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show/hide the button based on the scroll position
  window.addEventListener("scroll", () => {
    scrollToTopButton.style.display =
      window.scrollY > 150 ? "inline-flex" : "none";
  });

  /* End: scrolltopup */

  /* Start: tooltip */
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
  });
  /* End: tooltip */

  /*Start: change primary color */

  // const colorPicker = document.getElementById('color-picker');

  // colorPicker.addEventListener('input', (event) => {
  //     const hexColor = event.target.value;
  //     const rgbaColor = hexToRgb(hexColor); // Change the alpha value as needed
  //     changePrimaryColor(rgbaColor);
  // });

  // const changePrimaryColor = rgbaColor => {
  //     document.documentElement.style.setProperty('--primary-color', rgbaColor);
  // };

  // const hexToRgb = hex => {
  //     hex = hex.replace('#', '');
  //     const r = parseInt(hex.substring(0, 2), 16);
  //     const g = parseInt(hex.substring(2, 4), 16);
  //     const b = parseInt(hex.substring(4, 6), 16);
  //     return `${r}, ${g}, ${b}`;
  // };

  /*End: change primary color */

  /*Start: Start Alert */
  const PortfolioBody = document.querySelector(".Portfolio-body");

  const message = document.createElement("div");
  message.classList.add("cookie-element");

  message.innerHTML =
    '<span>"Thanks for visiting my portfolio. Feel free to explore!"</span> <button class="btn btn-sm btn-danger">Got it!</button>';

  PortfolioBody.prepend(message);

  document.querySelector(".cookie-element").addEventListener("click", () => {
    message.remove();
  });

  // styles
  message.style.cssText = `
        background-color: rgba(55, 56, 61);
        color: var(--fx-white);
        width: 100%;
        height: 45px;
        font-size: 13px;
        padding-inline: 15px;
        top: calc(100% - 45px);
        position: fixed;
        z-index: 15;
        `;
  /*End: Start Alert */

  /* Start: theme layout */
  const toggleTheme = (theme) => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-bs-theme", theme);
  };

  const themeButtons = document.querySelectorAll(".theme-button");

  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener("click", () => {
      const theme = themeButton.getAttribute("data-theme");
      toggleTheme(theme);
    });
  });
  /* End: theme layout */

  /*Start: current year */
  const presentYear = document.querySelector(".year");
  presentYear.textContent = new Date().getFullYear();
  /*End: current year */
})();
