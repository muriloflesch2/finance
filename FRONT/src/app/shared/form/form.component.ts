import { Component } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  dates:Number[];
  selectedDate:string;
  selectedCompany:string;

  constructor(private financeService:FinanceService){}

  ngOnInit(){
    this.dates = Array.from(Array(30),(e,i)=>(i+1));
  }

  selectionCompany(value) {
    this.financeService.selectedCompany = value;
  }

  selectionDate(value) {
    this.financeService.selectedDate = value;
  }
}
