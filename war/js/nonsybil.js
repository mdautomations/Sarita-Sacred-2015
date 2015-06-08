$(function () {
    $('#container').highcharts({
        title: {
            text: 'Received Signal Strength Vs Time (Recorded with 4 Nodes) - 17:43 hrs Feb 02 2015',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: JIST SIMULATOR',
            x: -20
        },
        xAxis: {
            categories: ['5ms', '15ms', '25ms', '35ms', '45ms', '55ms',
                '65ms', '75ms', '85ms', '95ms', '105ms', '115ms']
        },
        yAxis: {
            title: {
                text: 'Received Signal Strength'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix:' - Received threshold'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Node 1',
            data: [6.3, 5.1, 7.3, 11.2, 11.2, 12.5, 15.2, 17.2, 12.0, 12.1, 10.1, 6.6]
        }, {
            name: 'Node 2',
            data: [-1.2, 0.3, 2.3, 7.1, 7.1, 13.1, 14.3, 16.1, 13.1, 11.0, 6.2, 1.5]
        }, {
            name: 'Node 3',
            data: [-0.5, 0.3, 1.7, 6.2, 9.4, 12.1, 11.3, 10.1, 13.1, 7.0, 1.9, 1.6]
        }, {
            name: 'Node 4',
            data: [2.7, 2.1, 3.3, 6.3, 7.5, 12.1, 8.1, 10.2, 11.1, 8.1, 7.3, 2.6]
        }]
    });
});