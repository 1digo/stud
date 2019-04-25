import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
/*import { MatSort, MatTableDataSource } from '@angular/material'; */

@Injectable({
  providedIn: 'root'
})
export class FormSubService {

  calculateUrl = 'http://passionateguy.pythonanywhere.com/calculate/';
  generatePdfUrl = 'http://passionateguy.pythonanywhere.com/generate_report/pdf/';

  constructor(private http: HttpClient) {
  }

  generatePdf(dataW) {
    return this.http.post(
      this.generatePdfUrl,
      {dataW, }
    ).subscribe(
        data => {
          console.log('generatePdf', data);
          window.open(data.link, '_blank');
        },
        error => console.log('Error', error)
      );
  }
  formSub(sum) {
    return this.http.post(
      this.calculateUrl,
      {sum, }
    ).subscribe(
        data => {
          console.log('formSub', data);
          this.generatePdf(data);
        },
        error => console.log('Error', error)
      );
  }
}
