import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Server } from '../../shared/server.model';

import 'rxjs/Rx';

import { ServerStatus } from '../../shared/server.model';

@Injectable()
export class ServersService {
  dbServer: string = 'https://recipeapp-5371a.firebaseio.com/servers.json'; 
  constructor(private http: Http) { }

  getServers() {
    return this.http.get(this.dbServer).map(
      (response: Response) => {
        let res = JSON.parse(response['_body']);
        let resToSend: Server[] = [];
        res.forEach((server: Server) => {
          resToSend.push(server);
        });
        return resToSend;
      } 
    );
  }

  addServer() {
    let server = new Server('DEV', 'small', new Date(), ServerStatus.stable)
    return this.http.post(this.dbServer, server).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

}