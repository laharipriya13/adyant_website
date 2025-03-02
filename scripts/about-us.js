// Function to animate the lines when the About Us section is in view
function animateLines(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Show and animate the lines when About Us section is in view
            document.querySelectorAll('.animated-line').forEach(line => {
                line.style.opacity = '1';
                line.style.transform = 'scale(1)';
            });
        } else {
            // Reset the lines when About Us section is not in view
            document.querySelectorAll('.animated-line').forEach(line => {
                line.style.opacity = '0';
                line.style.transform = 'scale(0)';
            });
        }
    });
}
// Select the About Us section for observing
const aboutSection = document.querySelector('.about-div');

// Create an Intersection Observer to track when the About Us section is in view
const observer = new IntersectionObserver(animateLines, {
    threshold: 0.95  
});

// Start observing the About Us section
observer.observe(aboutSection);

document.addEventListener("DOMContentLoaded", function() {
    const missionButton = document.querySelector(".mission-button");
    const visionButton = document.querySelector(".vision-button");
    const missionDiv = document.getElementById("mission");
    const visionDiv = document.getElementById("vision");

    // Toggle mission visibility
    missionButton.addEventListener("click", function() {
        if (missionDiv.style.display === "none" || missionDiv.style.display === "") {
            missionDiv.style.display = "block";
            visionDiv.style.display = "none"; 
        } else {
            missionDiv.style.display = "none"; 
        }
        
        
    });

    // Toggle vision visibility
    visionButton.addEventListener("click", function() {
        if (visionDiv.style.display === "none" || visionDiv.style.display === "") {
            visionDiv.style.display = "block";
            missionDiv.style.display = "none"; 
        } else {
            visionDiv.style.display = "none"; 
        }
        
        
    });
});




