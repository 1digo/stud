import { Component, OnInit } from '@angular/core';
import {Info} from './info';
import {FormSubService} from "../../ui/services/form-sub.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {
  numModel = new Info( 0, 0 , 0 , 0,  0, 0 )
  constructor( private _formService: FormSubService) { }

  ngOnInit() {
  }
  onSubmit() {
    this._formService.formSub(this.numModel)
      .subscribe(
        data => console.log('Sucess', data),
        error => console.error('Error', error)
      );
  }
}
