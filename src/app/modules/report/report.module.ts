import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import {FormsModule} from '@angular/forms';
import {Info} from './info';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ReportComponent],

})
export class ReportModule { }
