// Optional: Smooth scrolling for older browsers (not needed if CSS scroll-behavior is used)
const navItems = document.querySelectorAll(".nav-items");

navItems.forEach((item) => {
item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = item.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for navbar height if sticky
        behavior: "smooth",
    });
    }
});
});

// JavaScript for mobile toggle
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
  