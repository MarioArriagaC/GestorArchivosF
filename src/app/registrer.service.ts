import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrerService {

  constructor(private http: HttpClient) { }
  registerUser(user: any): Observable<any>{
    return this.http.post('https://localhost:7253/api/usuarios/',user);
    
  }
}
