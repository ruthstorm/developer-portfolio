import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
// import { Project } from './project/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('developer-portfolio');
}
