//Funktion som toggler opened classen på vores mobile-nav samt fjerner scrolling.
function toggleMenu() {
  const menu = document.querySelector(".mobile-nav");

  menu.classList.toggle("opened");
  document.body.classList.toggle("remove-scrolling");
}