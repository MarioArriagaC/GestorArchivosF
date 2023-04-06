import { Component, ElementRef, OnInit } from '@angular/core';
import { RegistrerService } from '../registrer.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  name = '';
  lastName = '';
  dateBirth = '';
  user = '';
  password = '';
  registrado = false;
  
  // Variable para obtener el elemento del DOM
  private txtIpt!: HTMLElement;

  constructor(private RegisterService: RegistrerService, private router: Router, private ipt: ElementRef) { }

  ngOnInit(): void {
    this.txtIpt = this.ipt.nativeElement.querySelector('.iptUsr');  
  }

  userName() {
    this.user = this.name.substring(0, 3).toLocaleLowerCase() + this.lastName.substring(0, 3).toLocaleLowerCase();
  }


  disable() {
    alert("Suelta ahí pndejo")
    this.router.navigate(['/register'])
    this.txtIpt.setAttribute("disabled", "")
  }

  onSubmit() {
    console.log(this.registrado)
    this.RegisterService.loginUser().subscribe(data => {
      for (let numero in data) {
        if (this.user == data[numero].user) {
          alert('Usuario ya registrado')
          this.registrado = true
        }
      }
      if (this.name === '' || this.lastName === '' || this.dateBirth === '' || this.user === '' || this.password === '') {
        alert("Llena todo, pndejo idiota, baboso, mal parido, hijo de prra, culo si abres las dev tools");
      }
      else if (this.registrado == false) {
        this.RegisterService.registerUser({
          Name: this.name,
          Second_Name: this.lastName,
          date_birth: this.dateBirth,
          User: this.user,
          Password: CryptoJS.SHA256(this.password).toString()
        }).subscribe(data => {
          alert('usuario creado con exito');
          this.router.navigate(['/login']);
        });
      }
    });
  }


}
