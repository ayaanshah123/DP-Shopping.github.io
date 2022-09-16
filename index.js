const mobile_nav = document.querySelector(".mobile-navbar-btn")
const nav_Header = document.querySelector(".Header")

const togglenavbar = () => {
    // alert("hi");
    nav_Header.classList.toggle("active");
};

mobile_nav.addEventListener("click" , () => togglenavbar());124