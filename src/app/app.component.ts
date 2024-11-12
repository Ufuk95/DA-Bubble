import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevspaceComponent } from './devspace/devspace.component';
import { NewChannelComponent } from './new-channel/new-channel.component';
import { ChatComponent } from "./devspace/chat/chat.component";
import { ALL_CHANNELS } from './shared/devspace/ALL_CHANNELS';
import { ALL_USERS } from './shared/devspace/ALL_USERS';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevspaceComponent, NewChannelComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dabubble';

  isNewChannelClicked: boolean = false;

  channels = ALL_CHANNELS;
  users = ALL_USERS;

  selectedUserId = "u1";

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  handleNewChannelClicked(event: boolean) {
    this.isNewChannelClicked = event;
  }

  handleNewChannelClosed() {
    this.isNewChannelClicked = false;
  }

  handleUserSelected(id: string) {
    this.selectedUserId = id;
  }
}
