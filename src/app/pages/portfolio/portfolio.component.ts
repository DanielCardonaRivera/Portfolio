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
    titulo: 'Sitio Fundación Eliseo',
    descripcion: 'Sitio web con React y Bootstrap para una fundación de ayuda psicológica.',
    imagen: 'assets/img/Eliseofoundation.jpg',
    enlace: 'https://github.com/DanielCardonaRivera/Eliseofoundation_Website'
  },
  {
    titulo: 'CRC Website',
    descripcion: 'Tienda online elegante especializada en chaquetas. Hecho con Angular.',
    imagen: 'assets/img/CRC.jpg', 
    enlace: 'https://github.com/DanielCardonaRivera/CRC_Website'
  },
  {
    titulo: 'RLouise Website',
    descripcion: 'Sitio moderno para venta de pijamas femeninas. Responsive y amigable.',
    imagen: 'assets/img/RLouise.jpg', 
    enlace: 'https://github.com/DanielCardonaRivera/RLouise_Website'
  }
];
}
