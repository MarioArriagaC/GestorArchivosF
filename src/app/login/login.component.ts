import { Component, ViewChild } from '@angular/core';
import { RegistrerService } from '../registrer.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  files?: string | number;
  name = ''
  password = ''
  constructor(private RegistrerService : RegistrerService, private router:Router){}

  loginUsuario(){
    this.RegistrerService.loginUser().subscribe(data => {
      for(let numero in data){
        if(this.name == data[numero].user && CryptoJS.SHA256(this.password).toString() == data[numero].password){
          this.router.navigate(['/gestor']);
          
        }
      }
    });
  }
}
