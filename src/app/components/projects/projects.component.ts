import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatChipsModule,MatDividerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Plateforme E-commerce',
      description: 'Application de vente en gros et au détail pour revendeurs et clients finaux.',
      technologies: ['NestJS', 'Angular', 'Angular Material', 'MongoDB'],
      role: 'Conception de l\'architecture, développement'
    },
    {
      title: 'Gestion Cabinet Médical',
      description: 'Application desktop pour la gestion des rendez-vous, patients, consultation et factures.',
      technologies: ['C#', 'ADO.NET', 'SQL Server'],
      role: 'Conception et implémentation complète du système'
    },
    {
      title: 'Chat App',
      description: 'Application de messagerie en temps réel',
      technologies: ['Flutter', 'Firebase'],
      role: 'Création du système de chat et implémentation des notifications'
    },
    {
      title: 'Réservation de Navettes',
      description: 'Plateforme de réservation de trajets pour un service de transport.',
      technologies: ['ASP.NET MVC', 'SQL Server'],
      role: 'Développement des fonctionnalités de réservation et gestion des paiements'
    }
  ];
}
