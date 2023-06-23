import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EChartsOption, EChartsType, connect, getInstanceByDom } from 'echarts';
import { FinanceService } from 'src/app/services/finance.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {
  @ViewChild("chart")
  private chart: ElementRef;

  @ViewChild("chart2")
  private chart2: ElementRef;

  chartGraph:EChartsType;
  chartGraph2:EChartsType;
  
  routeSubscription:Subscription;
  dataSubscription:Subscription;
  title = 'project-yahoo-finance';

  optionsBase: EChartsOption ={
    color: ['#ff0000'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        min:-30,
        max: 30
      },
    ],
    series: [
      {
        name: 'Variação',
        type: 'bar',
        barWidth: '60%',
        data: [],
      },
    ],
  };

  options:EChartsOption = {};
  options2:EChartsOption = {};

  constructor(private financeService:FinanceService, private activatedRoute:ActivatedRoute,private router: Router) {}

  ngOnInit(){
     this.routeSubscription = this.activatedRoute.queryParams.subscribe((params:Params)=>{
        const companyName = this.activatedRoute.snapshot.queryParams['company'] || 'PETR4.SA';
        const days = this.activatedRoute.snapshot.queryParams['range'] || '30';

        this.dataSubscription = this.financeService.getData(companyName,days)
          .subscribe((resp)=>{
            const data = resp.chart.result.find(e => e)
            this.setDataChart(Number(days),data.indicators.quote[0].close);
            this.configCharts()
          });
      })
  }

  configCharts(){
    this.chartGraph = getInstanceByDom(this.chart?.nativeElement)!;
    this.chartGraph2 = getInstanceByDom(this.chart2?.nativeElement)!;
    this.chartGraph.setOption(this.options)
    this.chartGraph2.setOption(this.options2)

    connect([this.chartGraph!,this.chartGraph2!]);
  }

  setDataChart(xAxis,series:[]){
    this.optionsBase.xAxis[0].data = Array.from(Array(xAxis),(e,i)=>(i+1))
    
    this.options2 = cloneDeep(this.optionsBase);
    this.options = cloneDeep(this.optionsBase);

    series.reduce((prev,current,index,array)=> {
      const variationChart1 = ((current * 100) / prev) - 100;
      const variationChart2 = ((current * 100) / array[0]) - 100;

      this.options.series[0].data[index] = variationChart1;
      this.options2.series[0].data[index] = variationChart2;

      return current;
    })
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}

