function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if(currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
});
gsap.to(".overlay", 1.5, {
    delay: 3.5,
    height: 0,
    ease: "power4.inOut",
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.overlay');
        preloader.style.display = 'none'; // Hide preloader after a slight delay
    }, 2000); // Adjust the delay (in ms) as needed
});
