import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
 //  template: `
 //  	<app-server></app-server>
 // 	<app-server></app-server>
 // 	<app-server></app-server>
 // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'initialname';
	serverCreated = false;
	servers = [ 'test server', 'test server 2' ];
	buttonClicks = [];
	displayDetails = true;

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit() {
	}

	// onCreateServer() {
	// 	this.serverCreationStatus = 'Server was created!';
	// }
	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created!  Name is ' + this.serverName + '.';
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}

	onButtonClick() {
		let now = new Date();
		this.displayDetails = !this.displayDetails;
		this.buttonClicks.push(now.getTime());
	}
}
