import { Component } from '@angular/core';
import { RegistrerService } from '../registrer.service';
import { Router } from '@angular/router';
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
   
    const body = {
      Name: this.name,
      Second_Name: this.lastName,
      date_birth: this.dateBirth,
      User: this.user,
      Password: this.password
    };
    this.RegisterService.registerUser({
      body
    }).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

}
