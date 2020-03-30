var ctx = document.getElementById('annual_profit').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
        datasets: [{
            label: 'Money spent',
            data: [12, 19, 3, 5, 2, 3, 7, 3, 6, 8, 10, 8],
            backgroundColor: [
                '#ffccbc'
            ],
            borderColor: [
                '#ff5722'
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