import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
// import * as HighchartsExporting from 'highcharts/modules/exporting';
// import * as Variablepie from 'highcharts/modules/variable-pie';

// HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);
// Variablepie(Highcharts);

@Component({
  selector: 'app-widget-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Average Covid +',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'People',
          colorByPoint: true,
          data: [
            {
              name: 'Feeling Good',
              y: 70.00,
              sliced: true,
              selected: true,
            },
            {
              name: 'Feeling not Good',
              y: 10.00,
            },
            {
              name: 'Covid 19 Positive',
              y: 12.00,
            },
            {
              name: 'Recovered',
              y: 8.00,
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }
}
