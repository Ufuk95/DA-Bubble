import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevspaceComponent } from './devspace/devspace.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dabubble';
}
