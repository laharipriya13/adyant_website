import { eventsData } from "../data/events-data.js";

let eventsHTML = '';
eventsData.forEach((event) => {
    eventsHTML += `
        <div class="event-card"  data-title="${event.title}">
            <div class="content">${event.title}</div>
            <div class="sub">${event.date}</div>
        </div>
    `;
});
document.querySelector('.js-cards-container').innerHTML = eventsHTML;


document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', () => {
      const eventTitle = card.getAttribute('data-title');
      displayEventDetails(eventTitle); // Call function to display event details
  });
});

function displayEventDetails(eventTitle) {
  const eventDetails = document.querySelector('.js-individual-event');

  // Find the clicked event
  const clickedEvent = eventsData.find(event => event.title === eventTitle);

  if (clickedEvent) {
      // Generate HTML for the selected event
      const individualEventsHTML = `
          <div class="event-container">
              <div class="event-about">
                  <div class="event-title">${clickedEvent.title}</div>
                  <div class="event-description">${clickedEvent.description}</div>
                  <button class="button" onclick="openGallery()">View Gallery</button>
              </div>
              <div class="event-images-wrapper">
                  <div class="event-images">
                      <img src="${clickedEvent.image1}">
                      <img src="${clickedEvent.image2}">
                      <img src="${clickedEvent.image3}">
                  </div>
              </div>
          </div>
      `;

      eventDetails.innerHTML = individualEventsHTML;

      
      eventDetails.classList.remove('show');
      
      setTimeout(() => {
          eventDetails.classList.add('show');
      }, 200); 
  }
}



document.querySelectorAll('.event-card').forEach((card, index) => {
  setTimeout(() => {
      card.classList.add('fade-in');
  }, index * 100); 
});



const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(customCursor, {
        x: e.pageX, 
        y: e.pageY, 
        duration: 0.3,
        ease: "power2.out"
    });
});
document.querySelectorAll('.event-card').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.innerHTML = "Click";
        gsap.to(customCursor, {
            height: 55,
            width: 55,
            backgroundColor: "transparent",
            borderColor: "#461986",
            duration: 0.3
        });
    });

    element.addEventListener('mouseleave', () => {
        customCursor.innerHTML = "";
        gsap.to(customCursor, {
            height: 16,
            width: 16,
            backgroundColor: "#ec722b",
            borderColor: "",
            duration: 0.3
        });
    });
});



  
  
  