var ctx = document.getElementById('stations_chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Station1', 'Station2', 'Station3', 'Station4', 'Station5', 'Station6', 'Station7', 'Station6'],
        datasets: [{
            label: 'Charging number',
            data: [12, 19, 3, 5, 2, 3, 7, 5],
            backgroundColor: [
                '#b0bec5'
            ],
            borderColor: [
                '#607d8b'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true
    }
});