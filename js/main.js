const app = {
  init: () => {
    app.addListeners();
  },
  addListeners: () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navMenu.addEventListener("click", (ev) => {
      let linkCLicked = ev.target.closest(".nav-link");

      if (linkCLicked) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
