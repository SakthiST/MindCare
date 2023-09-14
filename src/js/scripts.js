const Menu = document.querySelector(".Menu");
const NavBar1 = document.querySelector(".NavBar1");

Menu.addEventListener("click", () => {
    if (Menu.classList.contains("select")) {
        Menu.classList.remove("select");
        NavBar1.style.transform = "translateY(-450px)";

    }
    else {
        Menu.classList.add("select");
        NavBar1.style.transform = "translateY(70px)";







    }



})