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
      content: `El desarrollo web no se trata solo de código y funcionalidades: el diseño gráfico y la usabilidad son igual de fundamentales. Una interfaz visualmente atractiva, coherente y fácil de navegar puede marcar la diferencia entre el éxito y el abandono de una aplicación. Hoy más que nunca, los usuarios esperan experiencias digitales intuitivas y visualmente cuidadas.
  
  Un buen diseño web no solo embellece, también:
  
  Guía al usuario: una jerarquía visual clara mejora la navegación.
  Transmite confianza: un diseño profesional genera credibilidad.
  Aumenta la conversión: formularios claros, botones visibles y llamados a la acción bien ubicados tienen impacto directo en los resultados.
  Facilita la escalabilidad: componentes visuales reutilizables permiten crecer sin perder consistencia.
  
  La usabilidad se refiere a qué tan fácil y eficiente es para el usuario interactuar con la aplicación. Algunos principios clave:
  
  Consistencia: botones, tipografía y colores deben mantenerse iguales en todo el sitio.
  Feedback inmediato: mostrar confirmaciones, errores o cargas ayuda al usuario a entender lo que ocurre.
  Accesibilidad: usar buen contraste, tamaños de fuente legibles, y navegación con teclado.
  Diseño adaptable (responsive): el diseño debe funcionar bien en móviles, tablets y escritorio.`
    },
    {
      id: 2,
      title: 'La importancia del uso de la API de Revit en la industria AEC',
      summary: 'La API de Revit permite extender y automatizar tareas dentro del entorno BIM, ofreciendo grandes ventajas a profesionales de arquitectura, ingeniería y construcción (AEC). Este artículo explora su impacto en la eficiencia, precisión y personalización de proyectos.',
      content: `El avance del BIM (Building Information Modeling) ha transformado profundamente la forma en que se diseñan y gestionan proyectos en la industria AEC. Autodesk Revit se ha consolidado como una de las herramientas líderes en este enfoque. Pero más allá de sus funcionalidades por defecto, su API (Application Programming Interface) permite ir más allá: automatizar tareas, integrar sistemas externos y desarrollar soluciones personalizadas que aumentan la eficiencia y reducen errores humanos.
  
  La API de Revit es una interfaz de programación que permite a los desarrolladores interactuar con los datos y funcionalidades internas de Revit. A través de lenguajes como C#, Python (con RevitPythonShell o pyRevit) o Dynamo (para programación visual), es posible crear scripts, plugins o aplicaciones que mejoran el flujo de trabajo.
  
  Beneficios clave de usar la API de Revit:
  
  1. Automatización de tareas repetitivas
  Muchos procesos cotidianos —como renombrar elementos, exportar planos, crear vistas o aplicar parámetros— pueden automatizarse. Esto:
  - Ahorra tiempo.
  - Disminuye errores manuales.
  - Libera al profesional para tareas más estratégicas.
  
  2. Interoperabilidad con otros sistemas
  Gracias a la API es posible integrar Revit con:
  - Bases de datos.
  - Sistemas de gestión de proyectos (ERP).
  - Software de cálculo estructural o energético.
  - Aplicaciones web o móviles personalizadas.
  
  Esto permite mantener un ecosistema digital más conectado y productivo.
  
  3. Personalización según necesidades del proyecto
  Cada empresa AEC tiene procesos únicos. La API permite desarrollar soluciones a medida: desde validaciones de calidad, hasta herramientas internas para cumplimiento normativo o revisión de modelos.
  
  4. Validación y control de calidad BIM
  A través de scripts, se pueden realizar:
  - Revisiones automáticas de modelos.
  - Comprobaciones de cumplimiento de estándares BIM.
  - Reportes de auditoría y coordinación.
  
  Casos de uso comunes en la industria:
  - Automatización de nomenclaturas de familias o vistas.
  - Generación automática de documentos o planos.
  - Sincronización con bases de datos de materiales o costos.
  - Control de cumplimiento de parámetros y estándares.
  - Extracción de cantidades para presupuestos o planificación.
  
  ¿Quién puede beneficiarse?
  - Arquitectos: generación rápida de documentación, validación de diseños.
  - Ingenieros estructurales o MEP: coordinación de modelos, detección de conflictos automatizada.
  - Constructores: extracción de cantidades y análisis constructivo.
  - BIM Managers: estandarización y control de calidad de modelos.
  
  Relación con Dynamo y otras herramientas
  Para quienes no son programadores, Dynamo es una herramienta visual que permite usar la API sin escribir código. Es ideal para tareas básicas de automatización. Sin embargo, para flujos más complejos o personalizados, el uso directo de la API con C# o Python brinda mayor control y potencia.
  
  Conclusión:
  El uso de la API de Revit representa una evolución natural para las empresas AEC que desean optimizar procesos, reducir errores y avanzar hacia una digitalización más inteligente. Adoptarla no es solo una ventaja técnica, sino una inversión en eficiencia y competitividad.`
    },
    {      
        id: 4,
        title: 'El impacto de la inteligencia artificial en el diseño gráfico y el desarrollo frontend',
        summary: 'Explora cómo la IA está transformando los procesos creativos y técnicos del diseño y desarrollo frontend, con herramientas, ejemplos reales y opiniones de expertos del sector.',
        content: `La inteligencia artificial (IA) se ha convertido en un catalizador clave de cambio en los campos del diseño gráfico y el desarrollo frontend. Según John Maeda, diseñador y tecnólogo, "la IA no sustituirá al diseñador, pero sí a quienes no la usen". Esta afirmación resume bien el papel creciente de la IA como una aliada estratégica que amplía las capacidades humanas, en lugar de reemplazarlas por completo.
      
      En el ámbito del diseño gráfico, herramientas como **DALL·E**, **Adobe Firefly**, **Canva Magic Design** o **RunwayML** permiten generar visuales, animaciones, paletas de color y hasta composiciones tipográficas con una simple instrucción de texto. Estas herramientas reducen drásticamente los tiempos de ideación y prototipado. Por ejemplo, diseñadores que antes tardaban días en generar variaciones de una propuesta de branding, hoy pueden obtener decenas de opciones en minutos, lo que permite dedicar más tiempo a la estrategia y menos a la ejecución técnica.
      
      Un caso particular de interés es **Uizard.io**, una herramienta que traduce bocetos dibujados a mano en interfaces interactivas listas para prototipar. Esto representa una convergencia entre el diseño UX y la IA, donde incluso usuarios sin formación técnica pueden construir wireframes funcionales apoyados por algoritmos de visión computacional.
      
      En el desarrollo frontend, la IA se manifiesta tanto en generación de código como en mejora de la calidad y productividad. Herramientas como **GitHub Copilot**, **Amazon CodeWhisperer** o **Tabnine** utilizan modelos de lenguaje para sugerir líneas de código, generar funciones enteras, e incluso detectar errores comunes mientras se escribe. Estas soluciones están transformando la manera en que se construyen componentes en frameworks como **Angular**, **React** o **Vue**, ayudando a automatizar tareas repetitivas y reduciendo la carga cognitiva del desarrollador.
      
      Un ejemplo concreto: empresas como **Figma** ya integran funciones predictivas que anticipan las acciones del diseñador y ofrecen recomendaciones en tiempo real para alineación, distribución de elementos o estilo tipográfico. Este tipo de funciones, aunque invisibles al ojo no técnico, están completamente basadas en IA y forman parte del llamado "diseño aumentativo".
      
      Expertos como **Jared Spool** (líder en experiencia de usuario) han advertido que si bien la IA ofrece un potencial inmenso para acelerar procesos, también puede introducir el riesgo de soluciones genéricas o descontextualizadas si no se acompaña de criterio profesional. De igual manera, autores como **Don Norman** (referente en diseño centrado en el usuario) insisten en que la empatía y la comprensión cultural aún no pueden ser imitadas por algoritmos, y siguen siendo indispensables en el diseño digital.
      
      La IA también está impactando en aspectos técnicos como la **accesibilidad**, mediante herramientas que identifican automáticamente errores de contraste, etiquetas mal implementadas o problemas de navegación por teclado. Además, soluciones como **Google Lighthouse**, combinadas con IA, están permitiendo diagnósticos más inteligentes sobre rendimiento, SEO y experiencia del usuario.
      
      A medida que los procesos de desarrollo y diseño se vuelven más asistidos por inteligencia artificial, el rol del profesional creativo y técnico evoluciona hacia un perfil más estratégico: capaz de orquestar herramientas automáticas, evaluar críticamente sus resultados y adaptarlos al contexto humano, estético y funcional del proyecto.`
      }
      
    
  ];
  
  postSeleccionado: any = null;

  verContenido(post: any) {
    this.postSeleccionado = post;
  }
  dividirParrafos(texto: string): string[] {
    return texto.split('\n').filter(p => p.trim() !== '');
  }
  

}


