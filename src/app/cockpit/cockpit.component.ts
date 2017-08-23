import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	newServerName = '';
  	newServerContent = '';

	constructor() { }

	ngOnInit() {
	}

	onAddServer(ServerData: {serverName: string, serverContent: string}) {
		this.serverCreated.emit({
			serverName: this.newServerName,
			serverContent: this.newServerContent
		});
	}

	onAddBlueprint(blueprintData: {serverName: string, serverContent: string}) {
		this.blueprintCreated.emit({
			serverName: this.newServerName,
			serverContent: this.newServerContent
		});
	}

	

}
