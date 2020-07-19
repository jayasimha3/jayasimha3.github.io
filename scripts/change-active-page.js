function changeActive () {
    if (window.location.pathname == "/about") {
        document.getElementById("aboutNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/work-experience") {
        document.getElementById("weNavbar").classList.add("active");
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/projects") {
        document.getElementById("projectsNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/extracurricular") {
        document.getElementById("extraNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("aboutNavbar").classList.remove("active");
    } else {
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    }
}