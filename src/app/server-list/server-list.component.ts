import { Component, OnInit } from '@angular/core';
import { Server, ServerStatus } from '../shared/server.model';
import { ServersService } from '../services/servers/servers.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit(){
    this.serversService.getServers().subscribe(
      (servers) => {
        this.servers = servers;
      }
    );
  }

  addServer(){
    this.serversService.addServer().subscribe(
      (servers) => {
        this.servers = servers;
      }
    )
  }
}