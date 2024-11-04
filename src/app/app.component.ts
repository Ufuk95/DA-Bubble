import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevspaceComponent } from './devspace/devspace.component';
import { NewChannelComponent } from './new-channel/new-channel.component';


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

  handleNewChannelClicked(event: boolean) {
    this.isNewChannelClicked = event;
  }

  handleNewChannelClosed() {
    this.isNewChannelClicked = false;
  }
}
