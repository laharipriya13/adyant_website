import { teamDetails } from "../data/team-data.js";
let teamDetailsHTML = '';

teamDetails.forEach((teamDetail) => {
    teamDetailsHTML += `
        <div class="team-member">
            <div class="image-container">
                <img src="${teamDetail.image}" alt="${teamDetail.name}" />
                <div class="circle"></div>
            </div>
    
            <div class="details">
                <div class="name">${teamDetail.name}</div>
                <div class="role">${teamDetail.role}</div>
            </div>
        </div>
    `;
});
document.querySelector('.js-members-details-container').innerHTML = teamDetailsHTML;


window.addEventListener("load", () => { 
    const membersContainer = document.querySelector(".team-bottom");
    
    gsap.to(membersContainer, {
        x: () => -(membersContainer.scrollWidth - window.innerWidth) + "px", 
        ease: "none",
    });
});
