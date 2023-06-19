import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,SharedModule],
})

export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>,private router:Router,private activatedRoute:ActivatedRoute,private financeService:FinanceService) {}

  onClickOk(){
    console.log('onclick Ok')
    this.router.navigate(['chart'], {
      relativeTo:this.activatedRoute,
      queryParams:{
        range:this.financeService.selectedDate,
        company:this.financeService.selectedCompany
      }
    });
  }
}