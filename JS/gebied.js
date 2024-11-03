const sidebar = document.getElementById('sidebar')
const arrow = document.querySelector('.arrow')
const legend = document.querySelector('.legend')

arrow.addEventListener('click', () => {
  sidebar.classList.toggle('hidden')
  legend.classList.toggle('hide')
  arrow.innerHTML = sidebar.classList.contains('hidden') ? '<i class="fa-solid fa-arrow-right"></i>' : '<i class="fa-solid fa-arrow-left"></i>'
})


const coordinatesPerDay = {
  "2024-05-01": [
    [53.1635, 6.3598, "Groningen, Groningen"],
    [52.5618, 4.6353, "IJmuiden, Noord-Holland"],
    [51.9740, 4.5448, "Rotterdam, Zuid-Holland"],
    [51.9297, 4.3246, "Rotterdam, Zuid-Holland"]
  ],
  "2024-05-02": [
    [53.0858, 6.7512, "Oost-Groningen, nabij Duitse grens"],
    [52.3258, 5.8403, "Harderwijk, Gelderland"]
  ],
  "2024-05-03": [
    [53.3511, 6.4493, "Groningen, Groningen"],
    [53.0830, 4.7503, "Waddenzee, mogelijk nabij Ameland"],
    [52.9416, 5.8237, "Urk, Flevoland"],
    [52.9406, 5.8259, "Urk, Flevoland"],
    [53.0796, 6.5073, "Midden-Groningen, Groningen"],
    [53.0464, 6.6651, "Oost-Groningen, grens Duitsland"],
    [52.8838, 6.3239, "Hoogeveen, Drenthe"],
    [52.4747, 6.3180, "Raalte, Overijssel"],
    [51.6105, 5.0124, "Den Bosch, Noord-Brabant"]
  ],
  "2024-05-04": [
    [52.8655, 6.6645, "Emmen, Drenthe"],
    [52.8146, 6.4206, "Coevorden, Drenthe"],
    [52.341881, 7.00144, "Grensstreek Duitsland (bij Enschede)"],
    [52.8104, 6.4421, "Coevorden, Drenthe"],
    [52.8387, 6.4546, "Zuid-Drenthe"],
    [52.3205, 6.9692, "Duitsland grens, Overijssel"],
    [52.2744, 5.6956, "Harderwijk, Gelderland"],
    [52.2393, 5.9397, "Ermelo, Gelderland"],
    [52.1093, 6.2679, "Lochem, Gelderland"],
    [51.9260, 4.3317, "Rotterdam, Zuid-Holland"],
    [51.5317, 4.9975, "Roosendaal, Noord-Brabant"]
  ],
  "2024-05-05": [
    [53.0519, 6.0908, "Drachten, Friesland"],
    [53.0583, 6.6682, "Oost-Groningen, grens Duitsland"],
    [52.8838, 6.2872, "Hoogeveen, Drenthe"],
    [52.8109, 6.1067, "Zuidwolde, Drenthe"],
    [52.8173, 6.3553, "Nieuwlande, Drenthe"],
    [52.5356, 6.4157, "Ommen, Overijssel"],
    [52.8166, 6.3576, "Nieuwlande, Drenthe"],
    [52.4957, 6.4536, "Ommen, Overijssel"],
    [52.3795, 6.9793, "Almelo, Overijssel"],
    [52.2257, 6.2869, "Lochem, Gelderland"],
    [52.2962, 5.7033, "Harderwijk, Gelderland"],
    [52.2484, 5.6489, "Putten, Gelderland"],
    [52.1795, 5.3892, "Leusden, Utrecht"],
    [51.4908, 5.2638, "Eindhoven, Noord-Brabant"],
    [51.4381, 5.2216, "Veldhoven, Noord-Brabant"],
    [51.3304, 5.2673, "Bladel, Noord-Brabant"]
  ],
  "2024-05-06": [
    [52.4474, 6.8584, "Hardenberg, Overijssel"],
    [51.6498, 4.8735, "Breda, Noord-Brabant"]
  ],
  "2024-05-07": [
    [51.3792, 5.4879, "Helmond, Noord-Brabant"]
  ],
  "2024-05-08": [
    [53.0407, 6.0537, "Leeuwarden, Friesland"],
    [52.5951, 6.6334, "Ommen, Overijssel"],
    [52.3277, 4.5187, "Hoofddorp, Noord-Holland"],
    [52.2111, 6.0174, "Lochem, Gelderland"],
    [52.1072, 5.6860, "Barneveld, Gelderland"],
    [51.5682, 4.9869, "Roosendaal, Noord-Brabant"]
  ],
  "2024-05-09": [
    [52.9216, 6.6989, "Emmen, Drenthe"],
    [52.8913, 6.6882, "Emmen, Drenthe"],
    [52.2884, 5.9276, "Harderwijk, Gelderland"],
    [51.8785, 4.6040, "Ridderkerk, Zuid-Holland"],
    [51.4379, 5.5380, "Helmond, Noord-Brabant"]
  ],
  "2024-05-10": [
    [52.8359, 6.4796, "Hoogeveen, Drenthe"],
    [52.8178, 6.3591, "Nieuwlande, Drenthe"],
    [51.7074, 4.8174, "Breda, Noord-Brabant"],
    [51.5077, 6.2104, "Venlo, Limburg"]
  ],
  "2024-05-11": [
    [52.4992, 4.6538, "IJmuiden, Noord-Holland"],
    [52.2897, 4.9409, "Haarlem, Noord-Holland"],
    [52.3007, 5.5254, "Almere, Flevoland"],
    [52.2786, 6.1872, "Lochem, Gelderland"],
    [51.3307, 5.2673, "Bladel, Noord-Brabant"]
  ],
  "2024-05-12": [
    [52.9912, 6.6755, "Emmen, Drenthe"],
    [51.4232, 5.9215, "Weert, Limburg"],
    [50.8163, 5.7495, "Maastricht, Limburg"]
  ],
  "2024-05-14": [
    [51.6667, 5.5903, "Den Bosch, Noord-Brabant"]
  ],
  "2024-05-16": [
    [51.9729, 5.7870, "Arnhem, Gelderland"]
  ],
  "2024-05-17": [
    [52.8926, 6.1815, "Hoogeveen, Drenthe"],
    [52.1460, 6.3408, "Lochem, Gelderland"]
  ],
  "2024-05-18": [
    [53.3736, 5.2237, "Leeuwarden, Friesland"],
    [53.3807, 5.2539, "Leeuwarden, Friesland"],
    [52.9711, 6.7208, "Emmen, Drenthe"],
    [52.8775, 6.8503, "Emmen, Drenthe"],
    [52.3842, 6.7882, "Almelo, Overijssel"],
    [52.2691, 5.7414, "Harderwijk, Gelderland"],
    [52.0687, 4.5776, "Den Haag, Zuid-Holland"],
    [52.4982, 4.5998, "IJmuiden, Noord-Holland"]
  ],
  "2024-05-19": [
    [52.9249, 6.6395, "Emmen, Drenthe"],
    [52.2053, 5.6562, "Amersfoort, Utrecht"],
    [51.8446, 4.7360, "Dordrecht, Zuid-Holland"]
  ],
  "2024-05-20": [
    [52.8145, 6.4574], [52.2238, 6.2869], [52.2298, 6.2861], [52.3189, 5.4868],
    [52.1791, 5.1118], [51.9876, 5.7822], [51.9350, 5.7040], [51.6846, 4.9912]
  ],
  "2024-05-21": [
    [51.6876, 4.1665], [52.799946, 6.12858]
  ],
  "2024-05-22": [
    [52.6901, 4.8161], [52.799946, 6.12858], [52.7474, 6.6453], [52.3787, 6.9618],
    [52.2553, 5.1453], [51.962222, 4.550556], [51.8822, 4.5415]
  ],
  "2024-05-23": [
    [52.3412, 5.1799], [52.799946, 6.12858], [52.3136, 4.8405]
  ],
  "2024-05-24": [
    [53.0929, 4.7555], [52.799946, 6.12858], [52.2538, 5.1652], [51.8843, 5.1897]
  ],
  "2024-05-25": [
    [53.4872, 6.2234], [53.0238, 6.5611], [52.799946, 6.12858], [52.3633, 6.8950],
    [52.2538, 5.1652], [52.3106, 4.5366], [52.3493, 4.5656], [51.9746, 4.5427]
  ],
  "2024-05-26": [
    [53.1197, 6.8804], [52.2046, 5.6666]
  ],
  "2024-05-27": [
    [51.4968, 5.2783]
  ],
  "2024-05-28": [
    [52.4543, 6.6743], [52.2624, 5.6697], [52.1686, 6.8439], [52.0113, 5.9865]
  ],
  "2024-05-29": [
    [53.4774, 6.1414], [53.1495, 6.0584], [52.9730, 6.7935], [52.799946, 6.12858],
    [52.376111, 5.785833], [52.3610, 4.9513], [51.9763, 4.1718], [50.8111, 5.7447]
  ],
  "2024-05-30": [
    [53.3699, 5.2087], [52.7255, 6.4431], [51.9633, 6.6901], [51.9633, 6.7001]
  ],
  "2024-05-31": [
    [53.0511, 6.6665], [52.8082, 6.3737], [52.2906, 5.9256], [52.2343, 5.6761],
    [51.8178, 5.9336], [51.8177, 5.9092], [51.8912, 4.0488], [51.6968561, 5.6010834],
    [50.7792, 5.8593]
  ]
}

function getLocationDescription(lat, lon) {
  const tolerance = 0.05 
  for (const [day, locations] of Object.entries(coordinatesPerDay)) {
    for (const [storedLat, storedLon, locationDescription] of locations) {
      if (
        Math.abs(lat - storedLat) < tolerance &&
        Math.abs(lon - storedLon) < tolerance
      ) {
        return locationDescription
      }
    }
  }
  return "Onbekende locatie" 
}

function printLocationsForDay(day) {
  const locations = coordinatesPerDay[day]
  if (!locations) {
    console.log("Geen locaties gevonden voor deze dag.")
    return
  }

  console.log(`Locaties voor ${day}:`)
  locations.forEach(([lat, lon, description]) => {
    console.log(`- [${lat}, ${lon}]: ${description}`)
  })
}

printLocationsForDay("2024-05-01")


const rainfallPerDay = {
  "2024-05-01": 2, "2024-05-02": 3, "2024-05-03": 5, "2024-05-04": 12,
  "2024-05-05": 0, "2024-05-06": 7, "2024-05-07": 1, "2024-05-08": 8,
  "2024-05-09": 2, "2024-05-10": 5, "2024-05-11": 0, "2024-05-12": 3,
  "2024-05-13": 6, "2024-05-14": 4, "2024-05-15": 0, "2024-05-16": 2,
  "2024-05-17": 10, "2024-05-18": 8, "2024-05-19": 6, "2024-05-20": 3,
  "2024-05-21": 4, "2024-05-22": 12, "2024-05-23": 7, "2024-05-24": 0,
  "2024-05-25": 1, "2024-05-26": 2, "2024-05-27": 3, "2024-05-28": 4,
  "2024-05-29": 6, "2024-05-30": 8, "2024-05-31": 0
}

const showBtn = document.getElementById('showSnails')

showBtn.addEventListener('click', showAllSnails)

var map = L.map('map').setView([52.374, 4.8897], 8) // Startpositie bij Amsterdam

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  minZoom: 7,
  maxZoom: 15,
  attribution: '© OpenStreetMap contributors, © CARTO'
}).addTo(map)

var bounds = L.latLngBounds([
  [50.5, 3.0],  // Zuidwesten (onderaan)
  [53.6, 7.2]   // Noordoosten (bovenaan)
])
map.setMaxBounds(bounds)
map.on('drag', function () {
  map.panInsideBounds(bounds, { animate: false })
})

const daysInMonth = 31
const startDay = new Date(2024, 4, 1).getDay() 
const calendar = document.getElementById('calendar')

for (let i = 0; i < startDay; i++) {
  const emptyCell = document.createElement('div')
  emptyCell.className = 'day'
  calendar.appendChild(emptyCell)
}

let selectedDayCell = null // Houdt de geselecteerde dag bij

for (let day = 1; day <= daysInMonth; day++) {
  const dayCell = document.createElement('div')
  dayCell.className = 'day'
  dayCell.textContent = day

  const dateKey = `2024-05-${day.toString().padStart(2, '0')}`
  const rainfall = rainfallPerDay[dateKey]

  if (rainfall > 10) {
    dayCell.style.backgroundColor = 'darkblue' 
    dayCell.style.color = 'white' 
  } else if (rainfall > 5) {
    dayCell.style.backgroundColor = 'blue' 
    dayCell.style.color = 'white' 
  } else {
    dayCell.style.backgroundColor = '#9ac2ce' 
    dayCell.style.color = 'black' 
  }

  dayCell.onclick = function () {
    if (selectedDayCell) {
      const previousDateKey = `2024-05-${selectedDayCell.textContent.padStart(2, '0')}`
      const previousRainfall = rainfallPerDay[previousDateKey]

      if (previousRainfall > 10) {
          selectedDayCell.style.backgroundColor = 'darkblue' 
          selectedDayCell.style.color = 'white' 
      } else if (previousRainfall > 5) {
          selectedDayCell.style.backgroundColor = 'blue' 
          selectedDayCell.style.color = 'white' 
      } else {
          selectedDayCell.style.backgroundColor = '#9ac2ce' 
          selectedDayCell.style.color = 'black' 
      }
    }

    selectedDayCell = dayCell
    selectedDayCell.style.backgroundColor = 'rgb(0, 43, 0)' // Stel de achtergrondkleur in op donker groen
    selectedDayCell.style.color = 'white' // Stel de tekstkleur in op wit

    showSnailsBasedOnRain(day)
    updateSnailCount(day) // Update het aantal slakken voor de geselecteerde dag
  }

  calendar.appendChild(dayCell) 
}


function showAllSnails() {
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })

  let totalSnails = 0 

  Object.keys(coordinatesPerDay).forEach(dateKey => {
    const snailCoordinates = coordinatesPerDay[dateKey]
    if (snailCoordinates) {
      snailCoordinates.forEach(coords => {
        const marker = L.marker(coords, {
          icon: L.divIcon({
            className: 'snail-icon',
            html: '<img src="./IMG/red-slug.svg" alt="Slak" class="snail-icon">', 
            iconSize: [30, 30], // Grootte van de slak
            iconAnchor: [15, 15] // Centreringspunt
          })
        })

        marker.bindPopup(`Locatie: (${coords[0].toFixed(4)}, ${coords[1].toFixed(4)})<br>Aantal slakken: 1`)

        marker.addTo(map)
        
        totalSnails++ 
      })
    }
  })

  document.getElementById('snailCount').textContent = `Het aantal slakken: ${totalSnails}`
}

function showSnailsBasedOnRain(day) {
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })

  const dateKey = `2024-05-${day.toString().padStart(2, '0')}`
  const snailCoordinates = coordinatesPerDay[dateKey]

  if (snailCoordinates) {
    snailCoordinates.forEach(coords => {
      const [lat, lon] = coords

      const marker = L.marker(coords, {
        icon: L.divIcon({
          className: 'snail-icon',
          html: '<img src="./IMG/red-slug.svg" alt="Slak" class="snail-icon">',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })
      }).addTo(map)

      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
    .then(response => response.json())
    .then(data => {
      const locationName = data.display_name

      marker.bindPopup(`<b>Locatie:</b> ${locationName}<br><b>Slakken aantal:</b> 1`).openPopup()
    })
    .catch(error => console.error('Error:', error))
})
}
}

function updateSnailCount(day) {
const dateKey = `2024-05-${day.toString().padStart(2, '0')}`
if (dateKey in coordinatesPerDay) {
const count = coordinatesPerDay[dateKey].length // Aantal slakken voor die dag
document.getElementById('snailCount').textContent = `Het aantal slakken: ${count}`
} else {
document.getElementById('snailCount').textContent = `Het aantal slakken: 0`
}
}