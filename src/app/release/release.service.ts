import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReleaseService {
  url = 'http://localhost:3000/releases';

  constructor(private http: Http) { }

  get(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise().then(response => response.json());
  }

}
