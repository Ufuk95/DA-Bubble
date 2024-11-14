import { Component, EventEmitter, Output } from '@angular/core';

import { UserComponent } from "./user/user.component";
import { CommonModule } from '@angular/common';
import { ALL_USERS } from '../shared/devspace/ALL_USERS';
import { ALL_CHANNELS } from '../shared/devspace/ALL_CHANNELS';
import { ChannelComponent } from "./channel/channel.component";
import { ChatComponent } from "./chat/chat.component";



@Component({
  selector: 'app-devspace',
  standalone: true,
  imports: [CommonModule, UserComponent, ChannelComponent, ChatComponent],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss'
})
export class DevspaceComponent {

  @Output() newChannelClicked: EventEmitter<boolean> = new EventEmitter();
  // @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();

  isHovered: boolean = false;
  isAddHovered: boolean = false
  isChannelHovered: boolean = false;
  isUserHovered: boolean = false;
  isNewChannelClicked: boolean = false;
  isUsersListVisible: boolean = true;
  isChannelsListVisible: boolean = true;

  showUsers: boolean = false;
  showChannels: boolean = true;

  channels = ALL_CHANNELS;
  users = ALL_USERS;

  selectedUserId = "u1";
  selectedChannelName = "Entwicklerteam";

  get selectedChannel() {
    return this.channels.find((channel) => channel.name === this.selectedChannelName)!;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;

    this.showChannels = false; // Kanäle ausblenden, wenn ein Benutzer ausgewählt wird
    this.showUsers = true;
  }

  onSelectedChannel(name: string) {
    this.selectedChannelName = name;

    this.showUsers = false; // Benutzer ausblenden, wenn ein Kanal ausgewählt wird
    this.showChannels = true;
  }


  getUserImageSource(): string {
    if (!this.isUsersListVisible && this.isUserHovered) {
      return '/img/Devspace/arrow_drop_down_right_blue.svg'
    } else if (!this.isUsersListVisible) {
      return '/img/Devspace/arrow_drop_down_right.svg'
    } else if (this.isUsersListVisible && this.isUserHovered) {
      return '/img/Devspace/arrow_drop_down_blue.svg'
    } else {
      return '/img/Devspace/arrow_drop_down.svg';
    }
  }

  getChannelImageSource() {
    if (!this.isChannelsListVisible && this.isChannelHovered) {
      return '/img/Devspace/arrow_drop_down_right_blue.svg'
    } else if (!this.isChannelsListVisible) {
      return '/img/Devspace/arrow_drop_down_right.svg'
    } else if (this.isChannelsListVisible && this.isChannelHovered) {
      return '/img/Devspace/arrow_drop_down_blue.svg'
    } else {
      return '/img/Devspace/arrow_drop_down.svg';
    }
  }


 


  toggleUsersList() {
    this.isUsersListVisible = !this.isUsersListVisible;
  }

  toggleChannelsList() {
    this.isChannelsListVisible = !this.isChannelsListVisible;
  }

  onNewChannelClick() {
    this.isNewChannelClicked = true;
    this.newChannelClicked.emit(this.isNewChannelClicked);
  }
}
