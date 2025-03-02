// Track mouse movement and animate the custom cursor position
const customCursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(customCursor, {
        x: e.pageX, 
        y: e.pageY, 
        duration: 0.3,
        ease: "power2.out"
    });
});

// Add hover effects for clickable elements
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        gsap.to(customCursor, {
            height: 50,
            width: 50,
            backgroundColor: "transparent",
            borderColor: "#461986",
            duration: 0.3
        });
    }); 

    element.addEventListener('mouseleave', () => {
        gsap.to(customCursor, {
            height: 16,
            width: 16,
            backgroundColor: "#ec722b",
            borderColor: "transparent",
            duration: 0.3
        });
    });
});
