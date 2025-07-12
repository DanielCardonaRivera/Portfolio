import { Component,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';



@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const root = document.documentElement;
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    root.style.setProperty('--x', `${x}%`);
    root.style.setProperty('--y', `${y}%`);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Mensaje enviado correctamente.';
          this.errorMessage = '';
          this.contactForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Hubo un error al enviar el mensaje.';
          this.successMessage = '';
          console.error(err);
        },
      });
    }
  }
}
