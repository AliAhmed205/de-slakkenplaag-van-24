document.addEventListener('DOMContentLoaded', function () {
  const parts = document.querySelectorAll('.part');
  const forwardBtn = document.getElementById('forward');
  const backBtn = document.getElementById('back');
  const partContainer = document.querySelector('.part-container');

  let currentPartIndex = 0;

  function updateVisibility() {
      parts.forEach((part, index) => {
          if (index === currentPartIndex) {
              part.classList.add('reveal');
              part.classList.remove('hide');
          } else {
              part.classList.remove('reveal');
              part.classList.add('hide');
          }
      });

      // Dynamisch de hoogte van de container aanpassen aan de inhoud
      const activePart = parts[currentPartIndex];
      partContainer.style.height = activePart.scrollHeight + 'px'; // Past de hoogte aan op basis van de content

      backBtn.disabled = currentPartIndex === 0;
      forwardBtn.disabled = currentPartIndex === parts.length - 1;
  }

  forwardBtn.addEventListener('click', () => {
      if (currentPartIndex < parts.length - 1) {
          currentPartIndex++;
          updateVisibility();

          // Scroll naar de social media sectie als je op het vijfde deel bent
          if (currentPartIndex === parts.length - 1) { // Als we op deel 5 zijn
              document.querySelector('#social-media-container').scrollIntoView({ behavior: 'smooth' });

              // Reset naar part-1 na de scroll
              currentPartIndex = 0; // Zet terug naar de eerste part
              setTimeout(updateVisibility, 500); // Geef tijd om te scrollen voordat je de zichtbaarheid bijwerkt
          }
      }
  });

  backBtn.addEventListener('click', () => {
      if (currentPartIndex > 0) {
          currentPartIndex--;
          updateVisibility();
      }
  });

  // Zet de startzichtbaarheid en start hoogte
  updateVisibility();
});
