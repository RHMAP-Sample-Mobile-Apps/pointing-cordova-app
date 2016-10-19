import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Session, User } from "../model/domain";
import 'rxjs/Rx';

import io from 'socket.io-client';

@Injectable()
export class PokerService {
  private url = 'http://localhost:8001/';
  private endpoint = this.url + "poker/";
  private socket;

  constructor(private http: Http) {
    this.socket = io(this.url);
  }

  getSessions(): Observable<Array<Session>> {
    return this.http.get(this.endpoint)
      .map(this.extractData)
      .catch(this.handleError);
  }

  joinSession(sessionName: string, userName: string): Promise<Session> {
    let session = this.http.post(this.endpoint + "join", { session: sessionName, user: userName })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

    this.socket.emit("room-join", sessionName);
    return session;
  }

  addSessionHandler(callback: (session: Session) => void) {
    this.socket.addEventListener("sessions", function (data) {
      callback(JSON.parse(data));
    });
  }

  addsessionUpdatedHandler(callback: (user: User) => void) {
    this.socket.addEventListener("sessionUpdated", function (data) {
      callback(JSON.parse(data));
    });
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}