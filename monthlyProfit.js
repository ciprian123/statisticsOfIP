var ctx = document.getElementById('monthly_profit').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [{
            label: 'Money spent',
            data: [12, 19, 3, 5, 2, 3, 7, 12, 9, 19, 23, 15, 5, 1, 3, 7, 10, 9, 12, 9, 8, 10, 3, 13, 4, 5, 6, 9, 4],
            backgroundColor: [
                '#b9f6ca'
            ],
            borderColor: [
                '#69f0ae'
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