document.addEventListener("DOMContentLoaded", function () {
  const kalfContainer = document.getElementById('kalfContainer')
  const popup = document.getElementById('popup')
  const title = document.getElementById('popup-title')
  const description = document.getElementById('popup-description')
  const image = document.getElementById('popup-image')
  const temperatureElement = document.getElementById('temperature')
  const precipitationElement = document.getElementById('precipitation')
  const slugsElement = document.getElementById('slugs')
  const dateEl = document.getElementById('datum')
  const upBtn = document.getElementById('up-button')
  const downBtn = document.getElementById('down-button')
  const kalfSection = document.getElementById('box-id')
  const slugSection = document.getElementById('relation-id')

  upBtn.addEventListener('click', ()=>{
    slugSection.scrollIntoView({behavior: 'smooth'})
  })
  downBtn.addEventListener('click', ()=>{
    kalfContainer.scrollIntoView({behavior: 'smooth'})
  })


  const dayData = {
    1: {
      date: '26/09/2024',
      temperature: '15°C',
      precipitation: '14.4mm',
      slugs: 7
    },
    2: {
      date: '30/09/2024',
      temperature: '8°C',
      precipitation: '13.5mm',
      slugs: 5
    },
    3: {
      date: '01/10/2024',
      temperature: '12°C',
      precipitation: '6.1mm',
      slugs: 4
    },
    4: {
      date: '02/10/2024',
      temperature: '12°C',
      precipitation: '2.6mm',
      slugs: 3
    },
    5: {
      date: '03/10/2024',
      temperature: '6°C',
      precipitation: '0mm',
      slugs: 1
    },
    6: {
      date: '04/10/2024',
      temperature: '5°C',
      precipitation: '0mm',
      slugs: 3
    },
    7: {
      date: '07/10/2024',
      temperature: '14°C',
      precipitation: '0mm',
      slugs: 6
    },
    8: {
      date: '08/10/2024',
      temperature: '15°C',
      precipitation: '3mm',
      slugs: 5
    },
  }

  // Marker data voor elke dag
  const markersData = {
    1: [
      {
        top: '90%',
        left: '46%',
        image: './IMG/day-1/IMG_4216.png',
        type: 'foto',
        description: 'Het is vandaag 15°C'
      },
      {
        top: '60%',
        left: '60%',
        image: './IMG/day-1/IMG_4198.png',
        type: 'bevinding',
        description: '08:21 - Spaanse Wegslak'
      },
      {
        top: '66%',
        left: '60%',
        image: './IMG/day-1/IMG_4196.png',
        type: 'bevinding',
        description: '08:23 - Spaanse Wegslak'
      },
      {
        top: '45%',
        left: '60.5%',
        image: './IMG/day-1/IMG_4200.png',
        type: 'bevinding',
        description: '08:24 - Spaanse Wegslak'
      },
      {
        top: '50%',
        left: '62%',
        image: './IMG/day-1/IMG_4210.png',
        type: 'bevinding',
        description: '08:24 - Spaanse Wegslak'
      },
      {
        top: '55%',
        left: '60.5%',
        image: './IMG/day-1/IMG_4202.png',
        type: 'bevinding',
        description: '08:25 - Spaanse Wegslak'
      },
      {
        top: '52%',
        left: '62%',
        image: './IMG/day-1/IMG_4203.png',
        type: 'bevinding',
        description: '08:25 - Spaanse Wegslak'
      },
      {
        top: '49%',
        left: '60.5%',
        image: './IMG/day-1/IMG_4204.png',
        type: 'bevinding',
        description: '08:30 - Spaanse wegslak' 
      },
      // {
      //   top: '42%',
      //   left: '56%',
      //   type: 'video',
      //   image: './IMG/day-1/IMG_4207.mp4',
      //   description: '08:32'
      // },
      // {
      //   top: '52%',
      //   left: '62%',
      //   type: 'video',
      //   image: './IMG/day-1/IMG_4209.mp4',
      //   description: '08:32'
      // },

    ],
    2: [{
        top: '53%',
        left: '60%',
        image: './IMG/day-2/IMG_4240.png',
        type: 'bevinding',
        description: "07:56 - Spaanse wegslak naast Carmen's bord."
      },
      {
        top: '50%',
        left: '61%',
        image: './IMG/day-2/IMG_4244-v1.png',
        type: 'bevinding',
        description: '07:57 - Bruine Spaanse wegslak.'
      },
      {
        top: '46%',
        left: '60%',
        image: './IMG/day-2/IMG_4245.png',
        type: 'bevinding',
        description: '07:58 - Spaanse Wegslak.'
      },
      {
        top: '57%',
        left: '60%',
        image: './IMG/day-2/IMG_4246.png',
        description: '08:00 - Spaanse wegslak naast een bloem.'
      },
      {
        top: '65%',
        left: '60%',
        image: './IMG/day-2/IMG_4247.jpg',
        type: 'bevinding',
        description: '07:59 - Spaanse Wegslak.'
      },
    ],
    3: [{
        top: '53%',
        left: '60%',
        image: './IMG/day-3/IMG_4281.png',
        type: 'bevinding',
        description: '08:04 - Korte bruine Spaanse Wegslak'
      },
      {
        top: '45%',
        left: '61%',
        image: './IMG/day-3/IMG_4280.png',
        type: 'bevinding',
        description: '08:01 - Bruine Spaanse Wegslak'
      },
      {
        top: '67%',
        left: '63%',
        image: './IMG/day-3/IMG_4292.png',
        type: 'bevinding',
        description: '08:29 - Grote Spaanse wegslak.'
      },
      {
        top: '55%',
        left: '61.5%',
        image: './IMG/day-3/IMG_4282.png',
        type: 'bevinding',
        description: '08:22 - Samen op de foto met Rob (Schooltuin Medewerker) en een Saanse wegslak.'
      },
      {
        top: '66%',
        left: '61.5%',
        image: './IMG/day-3/IMG_4285.png',
        type: 'foto'
      },
    ],
    4: [{
        top: '90%',
        left: '46%',
        image: './IMG/day-4/IMG_4305.png',
        type: 'foto',
        description: 'Vandaag is het 12°C.'
      },
      {
        top: '66%',
        left: '61.5%',
        image: './IMG/day-4/IMG_4307.png',
        type: 'foto'
      },
      {
        top: '58%',
        left: '60%',
        image: './IMG/day-4/IMG_4308.png',
        type: 'bevinding',
        description: '08:00 - Spaanse wegslak'
      },
      {
        top: '50%',
        left: '60.5%',
        image: './IMG/day-4/IMG_4309.png',
        type: 'foto',
        description: '08:02 - Bladeren van een courgette plant die een beetje gegeten zijn.'
      },
      {
        top: '55%',
        left: '60.5%',
        image: './IMG/day-4/IMG_4310.png',
        type: 'bevinding',
        description: '08:03 - Een Spaanse wegslak tussen de plantjes.'
      },
      {
        top: '53%',
        left: '60%',
        image: './IMG/day-4/IMG_4312.png',
        type: 'bevinding',
        description: '08:10 - Spaanse wegslak'
      },
    ],
    5: [{
        top: '90%',
        left: '46%',
        image: './IMG/day-5/IMG_4330.png',
        type: 'foto',
        description: 'Vandaag is het 6°C'
      },
      {
        top: '50%',
        left: '60.5%',
        image: './IMG/day-5/IMG_4336.png',
        type: 'foto',
        description: 'De courgette plant, weinig verandering.'
      },
      {
        top: '60%',
        left: '61.5%',
        image: './IMG/day-5/IMG_4334.png',
        type: 'bevinding',
        description: '08:00 - Spaanse wegslak op een tak.'
      },

    ],
    6: [{
        top: '90%',
        left: '46%',
        image: './IMG/day-6/IMG_4363.png',
        type: 'foto',
        description: 'Vandaag is het 5°C'
      },
      {
        top: '47%',
        left: '74%',
        image: './IMG/day-6/IMG_4361.png',
        type: 'bevinding',
        description: '07:55 - Spaanse wegslak'
      },
      {
        top: '45%',
        left: '60%',
        image: './IMG/day-6/IMG_4359.png',
        type: 'bevinding',
        description: '07:50 - Spaanse wegslak'
      },
      {
        top: '45%',
        left: '73%',
        image: './IMG/day-6/IMG_4360.png',
        type: 'bevinding',
        description: '07:52 - Spaanse wegslak'
      },
      {
        top: '48%',
        left: '71%',
        image: './IMG/day-6/IMG_4362.png',
        type: 'foto',
        description: 'Nieuwe locatie, getoond door een medewerker van de schooltuin.'
      },
    ],
    7: [{
        top: '90%',
        left: '46%',
        image: './IMG/day-7/IMG_4399.png',
        type: 'foto',
        description: 'Vandaag is het 14°C.'
      },
      {
        top: '66%',
        left: '61.5%',
        image: './IMG/day-7/IMG_4407.png',
        type: 'foto'
      },
      {
        top: '64%',
        left: '61%',
        image: './IMG/day-7/IMG_4401.png',
        type: 'bevinding',
        description: '08:18 - 2 Spaanse Wegslakken'
      },
      {
        top: '60%',
        left: '61%',
        image: './IMG/day-7/IMG_4406.png',
        type: 'bevinding',
        description: '08:20 - Een Spaanse wegslak'
      },
      {
        top: '46%',
        left: '74%',
        image: './IMG/day-7/IMG_4404.png',
        type: 'bevinding',
        description: '08:22 - Een lange Spaanse wegslak'
      },
      {
        top: '46%',
        left: '72%',
        image: './IMG/day-7/IMG_4405.png',
        type: 'bevinding',
        description: '08:24 - Spaanse Wegslak mama en baby'
      },
      {
        top: '43%',
        left: '71%',
        image: './IMG/day-7/IMG_4403.png',
        type: 'bevinding',
        description: '08:20 - Bruine Spaanse Wegslak'
      },
    ],
    8: [{
        top: '90%',
        left: '46%',
        image: './IMG/day-8/IMG_4419.png',
        type: 'foto',
        description: 'Het is vandaag 15°C'
      },
      {
        top: '66%',
        left: '61.5%',
        image: './IMG/day-8/IMG_4410.png',
        type: 'foto'
      },
      {
        top: '50%',
        left: '60.5%',
        image: './IMG/day-4/IMG_4411.png',
        type: 'foto',
        description: '08:12 - Courgette plant status'
      },
      {
        top: '48%',
        left: '61%',
        image: './IMG/day-8/IMG_4412.png',
        type: 'bevinding',
        description: '08:16 - Spaanse Wegslak'
      },
      {
        top: '49%',
        left: '77%',
        image: './IMG/day-8/IMG_4413.png',
        type: 'bevinding',
        description: '08:16 - Spaanse Wegslak'
      },
      {
        top: '49%',
        left: '75%',
        image: './IMG/day-8/IMG_4414.png',
        type: 'bevinding',
        description: '08:16 - Spaanse Wegslak'
      },
      {
        top: '45%',
        left: '73%',
        image: './IMG/day-8/IMG_4417.png',
        type: 'bevinding',
        description: '08:16 - Spaanse Wegslak'
      },
      {
        top: '47%',
        left: '71%',
        image: './IMG/day-8/IMG_4418.png',
        type: 'bevinding',
        description: '08:16 - Spaanse Wegslak'
      },
     
    ],
    // Voeg meer dagen toe met hun specifieke markers, afbeeldingen en beschrijvingen
  }

  // Functie om de informatie in de navigatiebalk bij te werken
  function updateNavBar(day) {
    const data = dayData[day]
    temperatureElement.innerHTML = `<p><i class="fa-solid fa-temperature-full"></i> Temperatuur: ${data.temperature}</p>`
    precipitationElement.innerHTML = `<p><i class="fa-solid fa-cloud-rain"></i> Neerslag: ${data.precipitation}</p>`
    slugsElement.innerHTML = `<p><i class="fa-solid fa-magnifying-glass"></i> Aantal slakken: ${data.slugs}</p>`
    dateEl.innerHTML = `<p><i class="fa-solid fa-calendar-days"></i> Datum: ${data.date}</p>`
  }

  // Voeg markers toe op basis van de dag
  function addMarkers(day) {
    kalfContainer.innerHTML = '' // Verwijder oude markers

    const markers = markersData[day]
    markers.forEach((marker, index) => {
      const div = document.createElement('div')
      div.className = `marker ${marker.type}` // Voeg class op basis van type (foto, video, bevinding) toe
      div.style.top = marker.top
      div.style.left = marker.left
      div.setAttribute('data-marker', `marker${index + 1}`)
      div.onclick = function () {
        openPopup(this, marker.image, marker.description)
      }
      kalfContainer.appendChild(div)
    })
  }
  // Open de pop-up
  function openPopup(markerElement, mediaUrl, desc) {
    // Bepaal de titel op basis van het type media (video of afbeelding)
    if (mediaUrl.endsWith('.mp4')) {
      title.textContent = `Video Bevinding` // Als het een video is
    } else {
      title.textContent = `Foto Bevinding` // Als het een afbeelding is
    }

    description.textContent = desc // Gebruik de specifieke beschrijving voor deze marker

    // Verwijder eventuele bestaande media (zowel afbeeldingen als video's)
    while (image.firstChild) {
      image.removeChild(image.firstChild)
    }

    // Check of de URL eindigt op .mp4 voor video, anders behandel het als een afbeelding
    if (mediaUrl.endsWith('.mp4')) {
      const video = document.createElement('video')
      video.src = mediaUrl
      video.controls = true // Voeg afspeelopties toe aan de video
      video.autoplay = true
      video.width = 300 // Optioneel: stel breedte van de video in
      image.appendChild(video) // Voeg video toe aan de popup
    } else {
      const img = document.createElement('img')
      img.src = mediaUrl
      img.alt = desc
      img.width = 300 // Optioneel: stel breedte van de afbeelding in
      image.appendChild(img) // Voeg afbeelding toe aan de popup
    }

    // Positioneer de popup boven de marker
    const rect = markerElement.getBoundingClientRect()
    const popupHeight = popup.offsetHeight
    const popupWidth = popup.offsetWidth

    // Bepaal de nieuwe positie van de popup
    let popupTop = rect.top + window.scrollY - popupHeight // Boven de marker
    let popupLeft = rect.left + window.scrollX + (rect.width / 2) - (popupWidth / 2) // Centraal uitlijnen boven de marker

    // Controleer of de popup buiten het scherm valt en pas aan
    if (popupTop < 0) {
      popupTop = rect.bottom + window.scrollY // Zet het onder de marker als er geen ruimte boven is
    }
    if (popupLeft + popupWidth > window.innerWidth + window.scrollX) {
      popupLeft = window.innerWidth + window.scrollX - popupWidth // Zorg ervoor dat de popup niet buiten rechts valt
    }
    if (popupLeft < 0) {
      popupLeft = 0 // Zorg ervoor dat de popup niet buiten links valt
    }

    // Stel de positionering van de popup in
    popup.style.left = `${popupLeft}px`
    popup.style.top = `${popupTop}px`
    popup.style.display = 'block'

    // Voeg een CSS klasse toe voor de overgang
    popup.classList.add('show')
  }

  // Sluit de pop-up
  document.getElementById('closePopup').onclick = function () {
    // Verwijder de 'show' class en verberg de popup
    popup.classList.remove('show')
    popup.style.display = 'none'

    // Zoek naar een video in de popup en pauzeer deze als die bestaat
    const video = image.querySelector('video')
    if (video) {
      video.pause() // Pauzeer de video
      video.currentTime = 0 // Reset de video naar het begin
    }

    // Verwijder ook de media-elementen (afbeelding of video) zodat het popup-content leeg is
    image.innerHTML = ''
  }

  // Voeg event listeners toe aan de knoppen
  const buttons = document.querySelectorAll('#dayButtons button')
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const day = this.getAttribute('data-day')
      console.log(`Dag ${day} is geklikt`)  // Log welke dag is geklikt
      
      buttons.forEach(btn => btn.classList.remove('activeBtn'))  // Verwijder de class van alle knoppen
      updateNavBar(day)
      addMarkers(day) // Voeg markers toe voor de geselecteerde dag
      this.classList.add('activeBtn')  // Voeg de active class toe aan de geklikte knop
    })
  })

  const showMap = document.querySelector('.about-kalf button') 
  const kalffMap = document.querySelector('.kaart-container')

showMap.addEventListener('click', ()=>{
  kalffMap.classList.toggle('visible')
})

  // Voeg markers toe voor de eerste dag
  updateNavBar(1) // Start met dag 1
  addMarkers(1) // Voeg markers toe voor dag 1
})