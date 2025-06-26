import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const root = document.documentElement;
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    root.style.setProperty('--x', `${x}%`);
    root.style.setProperty('--y', `${y}%`);
  }
}
