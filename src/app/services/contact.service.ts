import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:5025/api/contact'; // URL del backend .NET

  constructor(private http: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
