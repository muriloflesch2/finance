import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {path:"", loadChildren: () => import('./pages/home/home.module').then(p=> p.HomeModule)},
 // {path:"", loadChildren: () => import('./pages/home/home.module').then(p=> p.HomeModule)},
  {path:"chart",loadChildren: () => import('./pages/chart/chart.module').then(p=> p.ChartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
