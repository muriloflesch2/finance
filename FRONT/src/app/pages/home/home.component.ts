import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private financeService:FinanceService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(){
      console.log('entrou no onInit: ')
      
      
     // this.router.navigate(['chart'], {relativeTo:this.activatedRoute,queryParams:{company:'PETR4.SA'}});
  }
  onClickBt(){
    console.log('onclick bt')
    this.router.navigate(['chart'], {
      relativeTo:this.activatedRoute,
      queryParams:{
        range:this.financeService.selectedDate,
        company:this.financeService.selectedCompany
      }
    });
  }
}
