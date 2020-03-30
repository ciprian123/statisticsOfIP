var ctx = document.getElementById('weekly_profit').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'Money spent',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: [
                '#b388ff'
            ],
            borderColor: [
                '#6200ea'
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