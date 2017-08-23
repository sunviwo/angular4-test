import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  	{
  		type: 'blueprint',
  		name: 'Un server',
  		content: 'Contenu du serveur'
  	}
  ];



  onAddServer(ServerData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			type: 'server',
			name: ServerData.serverName,
			content: ServerData.serverContent
		});
	}

	onAddBlueprint(blueprintData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			type: 'blueprint',
			name: blueprintData.serverName,
			content: blueprintData.serverContent
		});
	}
  
}
