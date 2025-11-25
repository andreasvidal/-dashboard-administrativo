function toggleNav() {
  const menuMobile = document.getElementById("nav-mobile");

  // Alterna entre visible y oculto
  menuMobile.style.display =
    menuMobile.style.display === "flex" ? "none" : "flex";
}
