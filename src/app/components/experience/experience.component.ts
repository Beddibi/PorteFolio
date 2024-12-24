import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}
@Component({
  selector: 'app-experience',
  imports: [MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Développeur logiciel - Stage PFE',
      company: 'APTIV Meknes',
      period: 'février 2024 - mai 2024',
      description: [
        'Développement d\'une application web pour la gestion des kaizen dans l\'entreprise',
        'Développement d\'une application web pour gestion des stocks'
      ]
    },
    {
      title: 'Responsable commercial',
      company: 'Librairie El FAwz AL Hadita SARL',
      period: 'Juillet 2021 - Aujourd\'hui',
      description: [
        'Gestion des ventes et des relations clients',
        'Suivi des stocks et approvisionnements'
      ]
    },
    {
      title: 'Développeur',
      company: 'Géneration NT SARL',
      period: 'Mars 2020 - Mars 2020',
      description: [
        'Développement d\'une application web pour gestion d\'une Clinique médicale',
        'Gestion des rendez-vous client',
        'Gestion des consultations',
        'Gestion des ordonnances, certificats médicaux et dossiers patients'
      ]
    }
  ];
}
