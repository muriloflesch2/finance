import { Component} from '@angular/core';
import { DialogComponent } from './pages/chart/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { FinanceService } from './services/finance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkRoute:boolean;
  currentRoute: NavigationEnd;
  
  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private financeService:FinanceService,private router:Router){}

  ngOnInit(){   
    this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.checkRoute =  event.url !== '/' 
        }
      }
    );
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
 
}
