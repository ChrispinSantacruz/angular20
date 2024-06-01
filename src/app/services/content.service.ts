import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:8000/api';  // Cambia esto a la URL de tu API de Django

  constructor(private http: HttpClient) { }

  createContent(content: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contents/`, content);
  }

  getContents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contents/`);
  }

  getContent(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/contents/${id}/`);
  }

  updateContent(id: number, content: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/contents/${id}/`, content);
  }

  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contents/${id}/`);
  }
}
