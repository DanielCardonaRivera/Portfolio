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
      title: 'La importancia del diseño y la usabilidad en el desarrollo web',
      summary: 'Explora buenas prácticas de diseño gráfico y experiencia de usuario (UX) en el desarrollo web. Descubre cómo una interfaz bien diseñada mejora la usabilidad, accesibilidad y escalabilidad de cualquier proyecto digital.',
      content: 'El desarrollo web no se trata solo de código y funcionalidades: el diseño gráfico y la usabilidad son igual de fundamentales. Una interfaz visualmente atractiva, coherente y fácil de navegar puede marcar la diferencia entre el éxito y el abandono de una aplicación. Hoy más que nunca, los usuarios esperan experiencias digitales intuitivas y visualmente cuidadas.

Un buen diseño web no solo embellece, también:

Guía al usuario: una jerarquía visual clara mejora la navegación.
Transmite confianza: un diseño profesional genera credibilidad.
Aumenta la conversión: formularios claros, botones visibles y llamados a la acción bien ubicados tienen impacto directo en los resultados.
Facilita la escalabilidad: componentes visuales reutilizables permiten crecer sin perder consistencia.


La usabilidad se refiere a qué tan fácil y eficiente es para el usuario interactuar con la aplicación. Algunos principios clave:
Consistencia: botones, tipografía y colores deben mantenerse iguales en todo el sitio.
Feedback inmediato: mostrar confirmaciones, errores o cargas ayuda al usuario a entender lo que ocurre.
Accesibilidad: usar buen contraste, tamaños de fuente legibles, y navegación con teclado.
Diseño adaptable (responsive): el diseño debe funcionar bien en móviles, tablets y escritorio.
'
    },
    {
      id: 2,
      title: 'La importancia del uso de la API de Revit en la industria AEC',
      summary: 'La API de Revit permite extender y automatizar tareas dentro del entorno BIM, ofreciendo grandes ventajas a profesionales de arquitectura, ingeniería y construcción (AEC). Este artículo explora su impacto en la eficiencia, precisión y personalización de proyectos.',
      content: 'El avance del BIM (Building Information Modeling) ha transformado profundamente la forma en que se diseñan y gestionan proyectos en la industria AEC. Autodesk Revit se ha consolidado como una de las herramientas líderes en este enfoque. Pero más allá de sus funcionalidades por defecto, su API (Application Programming Interface) permite ir más allá: automatizar tareas, integrar sistemas externos y desarrollar soluciones personalizadas que aumentan la eficiencia y reducen errores humanos.
        
        La API de Revit es una interfaz de programación que permite a los desarrolladores interactuar con los datos y funcionalidades internas de Revit. A través de lenguajes como C#, Python (con RevitPythonShell o pyRevit) o Dynamo (para programación visual), es posible crear scripts, plugins o aplicaciones que mejoran el flujo de trabajo.
          
      Beneficios clave de usar la API de Revit
1. Automatización de tareas repetitivas
Muchos procesos cotidianos —como renombrar elementos, exportar planos, crear vistas o aplicar parámetros— pueden automatizarse. Esto:

Ahorra tiempo.
Disminuye errores manuales.
Libera al profesional para tareas más estratégicas.

2. Interoperabilidad con otros sistemas
Gracias a la API es posible integrar Revit con:

Bases de datos.
Sistemas de gestión de proyectos (ERP).
Software de cálculo estructural o energético.
Aplicaciones web o móviles personalizadas.

Esto permite mantener un ecosistema digital más conectado y productivo.

3. Personalización según necesidades del proyecto
Cada empresa AEC tiene procesos únicos. La API permite desarrollar soluciones a medida: desde validaciones de calidad, hasta herramientas internas para cumplimiento normativo o revisión de modelos.

4. Validación y control de calidad BIM
A través de scripts, se pueden realizar:

Revisiones automáticas de modelos.
Comprobaciones de cumplimiento de estándares BIM.
Reportes de auditoría y coordinación.

Casos de uso comunes en la industria
Automatización de nomenclaturas de familias o vistas.
Generación automática de documentos o planos.
Sincronización con bases de datos de materiales o costos.
Control de cumplimiento de parámetros y estándares.
Extracción de cantidades para presupuestos o planificación.

¿Quién puede beneficiarse?
Arquitectos: generación rápida de documentación, validación de diseños.
Ingenieros estructurales o MEP: coordinación de modelos, detección de conflictos automatizada.
Constructores: extracción de cantidades y análisis constructivo.
BIM Managers: estandarización y control de calidad de modelos.

Relación con Dynamo y otras herramientas
Para quienes no son programadores, Dynamo es una herramienta visual que permite usar la API sin escribir código. Es ideal para tareas básicas de automatización.
Sin embargo, para flujos más complejos o personalizados, el uso directo de la API con C# o Python brinda mayor control y potencia.

Conclusión
El uso de la API de Revit representa una evolución natural para las empresas AEC que desean optimizar procesos, reducir errores y avanzar hacia una digitalización más inteligente. Adoptarla no es solo una ventaja técnica, sino una inversión en eficiencia y competitividad.

'
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


