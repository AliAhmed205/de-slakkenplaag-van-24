const ctx = document.getElementById('waarnemingenAreaChart').getContext('2d');

const data = {
    labels: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    datasets: [{
        label: 'Waarnemingen per Maand',
        data: [6, 45, 51, 93, 97, 37, 120, 69, 43, 3, 0, 0], // Bijgewerkte gegevens
        backgroundColor: 'rgba(190, 255, 111, 0.38)', // Doorzichtig groen
        borderColor: 'rgba(190, 255, 111)', // Donkerder groen voor de rand
        borderWidth: 2,
        fill: true // Dit zorgt ervoor dat het gebied wordt gevuld
    }]
};

const config = {
    type: 'line', // Type 'line' met fill voor area chart
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Spaanse wegslak Waarnemingen per Maand',
                color: 'white' // Witte kleur voor de titel
            },
            legend: {
                display: true,
                labels: {
                    color: 'white' // Witte kleur voor de legenda labels
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Maanden',
                    color: 'white' // Witte kleur voor de x-as titel
                },
                ticks: {
                    color: 'white' // Witte kleur voor de x-as labels
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Aantal Waarnemingen',
                    color: 'white' // Witte kleur voor de y-as titel
                },
                ticks: {
                    color: 'white' // Witte kleur voor de y-as labels
                },
                beginAtZero: true // Begin altijd bij 0
            }
        }
    },
};

new Chart(ctx, config);
