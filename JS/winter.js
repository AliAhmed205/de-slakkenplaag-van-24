
const vorstCtx = document.getElementById('vorstChart').getContext('2d');
const vorstChart = new Chart(vorstCtx, {
    type: 'line',
    data: {
        labels: [
            '2000', '2001', '2002', '2003', '2004', 
            '2005', '2006', '2007', '2008', '2009', 
            '2010', '2011', '2012', '2013', '2014', 
            '2015', '2016', '2017', '2018', '2019', 
            '2020', '2021', '2022', '2023', '2024'
        ],
        datasets: [
            {
                label: 'Gemiddelde Temperatuur (°C)',
                data: [
                    9.0, 9.1, 9.3, 9.2, 9.0, 
                    8.8, 9.4, 9.3, 9.6, 9.5, 
                    9.0, 9.1, 9.3, 9.2, 9.4, 
                    9.5, 9.6, 9.8, 10.0, 10.2, 
                    10.3, 10.5, 10.6, 10.7, 10.8
                ],
                borderColor: 'orangered',
                backgroundColor: 'orangered',
                fill: false,
                tension: 0.4 // Zorg voor een golvende lijn
            },
            {
                label: 'Aantal Dagen met Vorst',
                data: [
                    30, 25, 20, 22, 28, 
                    26, 18, 15, 10, 12, 
                    8, 6, 5, 7, 9, 
                    10, 8, 6, 4, 3, 
                    5, 3, 2, 1, 0
                ],
                borderColor: '#00fff7',
                backgroundColor: '#00fff7',
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
                    text: 'Waarde',
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