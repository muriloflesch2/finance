import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartRoutingModule } from './chart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    MatTabsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    NgxEchartsModule.forChild()
  ]
})
export class ChartModule { }
