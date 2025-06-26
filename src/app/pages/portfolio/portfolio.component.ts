import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PortfolioComponent {
  proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Este es un ejemplo de proyecto web con Angular.',
      imagen: 'https://via.placeholder.com/400x200',
      enlace: 'https://github.com/DanielCardonaRivera/proyecto1'
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Aplicación fullstack con .NET y Angular.',
      imagen: 'https://via.placeholder.com/400x200',
      enlace: 'https://github.com/DanielCardonaRivera/proyecto2'
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Sitio web para una fundación con diseño responsivo.',
      imagen: 'https://via.placeholder.com/400x200',
      enlace: 'https://github.com/DanielCardonaRivera/proyecto3'
    }
  ];
}
