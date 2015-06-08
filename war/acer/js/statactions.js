$(function () {
	 $.ajax({
         type: 'POST',
         url: '/getlink', 
         async : false,
         success: function(data)
		 {
        	 jsonvar				=	JSON.parse(data);
        	 console.log(jsonvar);
        	 console.log("json");
        	 for(index in jsonvar)
        	 {
        		 $('#mini').highcharts({
        		        chart: {
        		            zoomType: 'xy'
        		        },
        		        title: {
        		            text: 'User Search History'
        		        },
        		        subtitle: {
        		            text: 'Weblog'
        		        },
        		        xAxis: [{
        		            categories: ['Link1', 'Link2', 'Link3', 'Link4', 'Link5', 'Link6',
        		                'Link7', 'Link8', 'Link9', 'Link10', 'Link11', 'Link12']
        		        }],
        		        yAxis: [{ // Primary yAxis
        		            labels: {
        		                format: '{value} times',
        		                style: {
        		                    color: Highcharts.getOptions().colors[1]
        		                }
        		            },
        		            title: {
        		                text: 'Click Rates',
        		                style: {
        		                    color: Highcharts.getOptions().colors[1]
        		                }
        		            }
        		        }, { // Secondary yAxis
        		            title: {
        		                text: 'Queries',
        		                style: {
        		                    color: Highcharts.getOptions().colors[0]
        		                }
        		            },
        		            labels: {
        		                format: '{value}',
        		                style: {
        		                    color: Highcharts.getOptions().colors[0]
        		                }
        		            },
        		            opposite: true
        		        }],
        		        tooltip: {
        		            shared: true
        		        },
        		        legend: {
        		            layout: 'vertical',
        		            align: 'left',
        		            x: 120,
        		            verticalAlign: 'top',
        		            y: 100,
        		            floating: true,
        		            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        		        },
        		        series: [{
        		            name: 'Queries',
        		            type: 'column',
        		            yAxis: 1,
        		            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        		            tooltip: {
        		                valueSuffix: ''
        		            }

        		        }, {
        		            name: 'Click Rates',
        		            type: 'spline',
        		            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        		            tooltip: {
        		                valueSuffix: 'times'
        		            }
        		        }]
        		    });
        	 }
		 }
	 });
	
    
});