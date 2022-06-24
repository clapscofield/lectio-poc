Highcharts.chart('generoBarReview', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Classics',
            'Literature',
            'Unknown',
            'Romance',
            'Short-Stories',
            'Philosophy',
            'History',
            'Cultural',
            'Biography',
            'Fantasy'
        ]
    },
    yAxis: {
        type: 'logarithmic',
        title: {
            text: 'Total de reviews'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total reviews',
        color: "#F3797E",
        data: [15195, 196, 175, 162, 162, 62, 30, 20, 19, 19]

    }],
    exporting: {
        enabled: true
    },
    credits: {
        enabled: false
    }
});


Highcharts.chart('generoBarPages', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Academic', 'Anthropology', 'Biography', 'Childrens', 'Classics',
        'Contemporary', 'Cultural', 'Design', 'Drama', 'Epic', 'Fantasy',
        'Historical', 'History', 'Humor', 'Literary-Fiction', 'Literature',
        'Philosophy', 'Plays', 'Politics', 'Reference', 'Religion', 'Romance',
        'Sci-Fi', 'Science', 'Self-Help', 'Short-Stories', 'Sociology',
        'Travel', 'Unknown', 'Young-Adult']
    },
    yAxis: {
        title: {
            text: 'Média de páginas'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Média de páginas',
        color: "#F3797E",
        data: [136.0, 334.5, 220.0, 218.66, 213.79, 204.0, 80.0, 139.0, 146.66, 315.0, 138.07, 326.0, 399.44,
            112.0,
            136.0,
            212.82978723404256,
            208.69230769230768,
            167.44444444444446,
            269.0,
            426.0,
            145.0,
            217.5719951389259,
            237.223934723481,
            368.0,
            140.0,
            136.37142857142857,
            236.0,
            218.11196736174048,
            244.23470910781663,
            278.0
        ]
    }],
    exporting: {
        enabled: true
    },
    credits: {
        enabled: false
    }
});