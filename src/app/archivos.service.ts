import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  constructor(private http: HttpClient) {
  
  }
  messages: string[] = [];

  getFiles(): Observable<any>{
    return this.http.get('https://localhost:7253/api/gestor/');
  }
  uploadFile(file: any): Observable<any>{
    return this.http.post('https://localhost:7253/api/gestor/',file);
    
  }
  editFile(file: any): Observable<any>{
    return this.http.put('https://localhost:7253/api/gestor/2', file);
  }

}
