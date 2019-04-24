import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {ReportComponent} from './modules/report/report.component';
import {UiModule} from './ui/ui.module';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
