import { Component, EventEmitter, Output } from '@angular/core';

import { UserComponent } from "./user/user.component";
import { CommonModule } from '@angular/common';
import { ALL_USERS } from '../shared/devspace/ALL_USERS';
import { ALL_CHANNELS } from '../shared/devspace/ALL_CHANNELS';
import { ChannelComponent } from "./channel/channel.component";



@Component({
  selector: 'app-devspace',
  standalone: true,
  imports: [CommonModule, UserComponent, ChannelComponent],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss'
})
export class DevspaceComponent {

  @Output() newChannelClicked: EventEmitter<boolean> = new EventEmitter();

  isHovered: boolean = false;
  isAddHovered: boolean = false
  isChannelHovered: boolean = false;
  isUserHovered: boolean = false;
  isNewChannelClicked: boolean = false;
  isUsersListVisible: boolean = true;
  isChannelsListVisible: boolean = true;

  channels = ALL_CHANNELS;
  users = ALL_USERS;

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

  onSelectedUser(id: string) {
    console.log('Ausgewählter Benutzer:', id);
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
