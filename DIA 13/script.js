function toggleMenu() {
    var menu = document.getElementById("navbarMenu");
    var toggleButton = document.querySelector(".navbar-toggle");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      toggleButton.classList.remove("active");
    } else {
      menu.classList.add("show");
      toggleButton.classList.add("active");
    }
  }
  