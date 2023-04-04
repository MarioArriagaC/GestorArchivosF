import { Component } from '@angular/core';
import { RegistrerService } from '../registrer.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  lastName = '';
  dateBirth = '';
  user = '';
  password = '';
  
  constructor(private RegisterService: RegistrerService, private router:Router){}
  onSubmit(){
    
    this.RegisterService.registerUser({
      Name: this.name,
      Second_Name: this.lastName,
      date_birth: this.dateBirth,
      User: this.user,
      Password: CryptoJS.SHA256(this.password).toString()
    }).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

}
