import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Session } from "../model/domain";
import 'rxjs/Rx';

@Injectable()
export class PokerService {
  private url = 'http://localhost:8001/poker';

  constructor(private http: Http) { }

  getSessions(): Observable<Array<Session>> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body: Array<Session> = res.json();
    return body;
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}