import {Component, OnInit} from '@angular/core';
import {FormSubService} from '../../ui/services/form-sub.service';
import {FormGroup, FormArray, FormControl} from '@angular/forms';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {
  sum;
  participantsForm: FormGroup = new FormGroup({
    num: new FormArray([new FormControl('0')])
  });

  constructor(private formService: FormSubService) {
  }

  ngOnInit() {
  }

  add() {
    if ((this.participantsForm.controls['num'] as FormArray).length >= 7) {
      return;
    } else {
      (this.participantsForm.controls['num'] as FormArray).push(new FormControl('0'));
    }
  }

  Confirm(num) {
    this.sum = 0;
    for (const q of  num) {
      this.sum = this.sum + q * 1;
    }
    this.formService.formSub(this.sum);
  }

  remove(index) {
    (this.participantsForm.controls['num'] as FormArray).removeAt(index);
  }
}
