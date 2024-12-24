import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Skill {
  category: string;
  items: {name: string; level: number}[];
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Langages',
      items: [
        {name: 'JavaScript', level: 90},
        {name: 'TypeScript', level: 85},
        {name: 'Java', level: 80},
        {name: 'C#', level: 75}
      ]
    },
    {
      category: 'Frameworks',
      items: [
        {name: 'Angular', level: 90},
        {name: 'NestJS', level: 85},
        {name: 'Node.js', level: 80},
        {name: 'Flutter', level: 70}
      ]
    },
    {
      category: 'Bases de données',
      items: [
        {name: 'MongoDB', level: 85},
        {name: 'SQL Server', level: 80},
        {name: 'Firebase', level: 75}
      ]
    }
  ];
}
