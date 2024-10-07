const obsCtx = document.getElementById('observationsChart').getContext('2d');
const observationsChart = new Chart(obsCtx, {
    type: 'line',
    data: {
        labels: [
            '2009', '2010', '2011', '2012', '2013', 
            '2014', '2015', '2016', '2017', '2018', 
            '2019', '2020', '2021', '2022', '2023', 
            '2024'
        ],
        datasets: [
            {
                label: 'Waarnemingen',
                data: [
                    0, 0, 3, 6, 0, 
                    29, 27, 22, 25, 38, 
                    5, 14, 59, 29, 61, 
                    566
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.4 // Zorg voor een golvende lijn
            },
            {
                label: 'Individuen',
                data: [
                    0, 0, 103, 12, 0, 
                    36, 554, 33, 37, 987, 
                    14, 30, 94, 639, 71, 
                    1261
                ],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4 // Zorg voor een golvende lijn
            },
            {
                label: 'Waarnemers',
                data: [
                    0, 0, 2, 6, 0, 
                    11, 14, 18, 19, 22, 
                    5, 12, 51, 14, 56, 
                    478
                ],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: false,
                tension: 0.4 // Zorg voor een golvende lijn
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Jaar',
                    color: 'white' // Witte titel voor de X-as
                },
                ticks: {
                    color: 'white' // Witte ticks voor de X-as
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Optioneel: Witte gridlijnen
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Aantal',
                    color: 'white' // Witte titel voor de Y-as
                },
                ticks: {
                    color: 'white' // Witte ticks voor de Y-as
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Optioneel: Witte gridlijnen
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Witte labels voor de legende
                }
            }
        }
    }
});