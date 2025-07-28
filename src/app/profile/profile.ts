import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  name: string = "Ruth Storm";
role: string = "Software Developer";
location: string = "Napa, CA";
linkedinUrl: string = "https://www.linkedin.com/in/stormruth/";
githubUrl: string = "https://github.com/ruthstorm";


}
