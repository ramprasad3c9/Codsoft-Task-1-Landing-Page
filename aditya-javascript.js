// this javascript file used to nav container and side bar //

// sidebar section start //
function init() {
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");

  const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
  };

  const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
  };

  hamburger.addEventListener("click", openSidebar);
  sidebarCloseButton.addEventListener("click", closeSidebar);
}
init();
// sidebar section end //

// navbar scrolling section start //
function navRelatedCode() {
  const navbarContainer = document.querySelector(".nav-container");
  window.addEventListener("scroll", function () {
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollNumber >= targetNumber) {
      navbarContainer.classList.add("sticky-nav");
    } else {
      navbarContainer.classList.remove("sticky-nav");
    }
  });
}
navRelatedCode();
// navbar scrolling section end //
