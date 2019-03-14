import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = './assets/data/api/fiction.json';

  constructor(private http : HttpClient) { }

  getData(attribute) : Observable<any>{
   
 
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData));
  }

  private extractData( res : Response){
    let body = res;
    return body || {};
  }


}
