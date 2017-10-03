import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'SSS';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  // onupdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  ngOnInit() {
  }

}
