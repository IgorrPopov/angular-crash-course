import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test name';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 5000)
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created the server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;    
  }

}
