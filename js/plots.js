Highcharts.chart('radarplots', {
    chart: {
      polar: true,
      height: 400,
      type: 'line',
      backgroundColor: 'transparent'
    },
  
    title: {
      useHTML: true,
      text: null
    },
  
    pane: {
      size: '90%'
    },
  
    xAxis: {
      categories: ['Average Rating', 'Ratings Count', 'Text Reviews Count',
             'To Read', 'Currently Reading', 'Favorites'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
  
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 1
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.1f}</b><br/>'
    },
  
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
  
    series: [{
      name: 'Cluster 1',
      data: [0.734862, 1.000000, 1.000000, 1.000000, 1.00000, 1.000000],
      pointPlacement: 'on',
      color: '#437a67'
    }, {
      name: 'Cluster 2',
      data: [0.000000, 0.000000, 0.000000, 0.000000, 0.00000, 0.000000],
      pointPlacement: 'on',
      color: '#dd6326'
    }, {
      name: 'Cluster 3',
      data: [1.000000, 0.100402, 0.192465, 0.094475, 0.12652, 0.142789],
      pointPlacement: 'on',
      color: '#ffb95c'
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          pane: {
            size: '70%'
          }
        }
      }]
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  
  });