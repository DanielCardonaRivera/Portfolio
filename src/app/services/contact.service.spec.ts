import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:5025/api/contact'; // Usar el puerto correcto del backend

  constructor(private http: HttpClient) {}

  sendContact(form: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, form);
  }
}
