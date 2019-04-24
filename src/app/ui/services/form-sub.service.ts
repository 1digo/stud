import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Info} from "../../modules/report/info";

@Injectable({
  providedIn: 'root'
})
export class FormSubService {
  _url = '';
  constructor(private _http: HttpClient) { }
  formSub(info: Info) {
   return this._http.post<any>(this._url, info);
  }
}
