import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'Cómo estructurar un proyecto Angular moderno',
      summary: 'Explora buenas prácticas para organizar módulos , componentes y servicios para facilitar la escalabilidad y mantenimiento.',
      content: 'Angular permite construir aplicaciones escalables si se estructura correctamente desde el inicio. Se recomienda usar un esquema modular, separar lógica en servicios, y componentes standalone para una mejor gestión.'
    },
    {
      id: 2,
      title: 'Integrando Angular con .NET: Fullstack real',
      summary: 'Aprende a conectar tu frontend Angular con un backend robusto hecho en .NET, incluyendo servicios REST y seguridad.',
      content: 'Una arquitectura fullstack con Angular y .NET es muy poderosa. Puedes usar ASP.NET Web API para exponer endpoints y consumirlos desde Angular con HttpClient. Además, puedes proteger rutas con JWT.'
    },
    {
      id: 3,
      title: 'Consejos para mejorar el rendimiento de tu sitio web',
      summary: 'Tips prácticos para optimizar carga, reducir tiempos de respuesta y mejorar la experiencia de usuario.',
      content: 'Utiliza lazy loading, reduce tamaños de imágenes, implementa caché y analiza el rendimiento con herramientas como Lighthouse. Angular permite modularizar y optimizar con facilidad.'
    }
  ];
  postSeleccionado: any = null;

  verContenido(post: any) {
    this.postSeleccionado = post;
  }

}


