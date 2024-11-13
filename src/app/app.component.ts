import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevspaceComponent } from './devspace/devspace.component';
import { NewChannelComponent } from './new-channel/new-channel.component';
import { ALL_CHANNELS } from './shared/devspace/ALL_CHANNELS';
import { ALL_USERS } from './shared/devspace/ALL_USERS';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevspaceComponent, NewChannelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dabubble';

  isNewChannelClicked: boolean = false;

  channels = ALL_CHANNELS;
  users = ALL_USERS;

  

  handleNewChannelClicked(event: boolean) {
    this.isNewChannelClicked = event;
  }

  handleNewChannelClosed() {
    this.isNewChannelClicked = false;
  }

  
}
