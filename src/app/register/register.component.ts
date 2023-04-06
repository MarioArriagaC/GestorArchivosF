import { Component, ElementRef, OnInit } from '@angular/core';
import { RegistrerService } from '../registrer.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = '';
  lastName = '';
  dateBirth = '';
  user = '';
  password = '';
  registrado = false;

  // Variables para obtener la fecha actual
  today: any;
  year: any;
  month: any;
  day: any;
  maxValueDate: any;
  minValueDate: any;

  // Variable para obtener el elemento del DOM
  private txtIpt!: HTMLElement;
  private iptDate!: HTMLElement;

  constructor(private RegisterService: RegistrerService, private router: Router, private ipt: ElementRef, private iptD: ElementRef) { }

  ngOnInit(): void {
    this.txtIpt = this.ipt.nativeElement.querySelector('.iptUsr');
    this.iptDate = this.iptD.nativeElement.querySelector('.iptDate')

    // Obtenemos la fecha
    this.today = new Date();

    // De la fecha obtenemos el año, mes y día
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.day = this.today.getDate();

    // Concatenamos los valores del valor maximo de fecha
    // Debe ser mayor de edad para poder registrarse
    this.maxValueDate = this.year - 18 + '-0' + this.month + '-0' + this.day;

    // Concatenamos los valores del valor minimo de fecha
    // 120 años menos de la fecha actual
    this.minValueDate = this.year - 120 + '-0' + this.month + '-0' + this.day;
  }

  userName() {
    this.user = this.name.substring(0, 3).toLocaleLowerCase() + this.lastName.substring(0, 3).toLocaleLowerCase();
  }

  disable() {
    alert("Suelta ahí pndejo")
    this.router.navigate(['/register'])
    this.txtIpt.setAttribute("disabled", "")
  }

  date() {
    // Agregamos ese atributo al elemento iptDate 
    this.iptDate.setAttribute("max", this.maxValueDate)

    // Agregamos ese atributo al elemento iptDate 
    this.iptDate.setAttribute("min", this.minValueDate)
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
      // En caso de que los campos no se cumplan de la manera correcta, sucederá este caso
      if (this.name === '' || this.lastName === '' || this.dateBirth === '' || this.user === '' || this.password.length < 3) {
        alert("Favor de llenar todos los requisitos de manera correcta");
      }
      else if (this.registrado == false) {
        this.RegisterService.registerUser({
          Name: this.name,
          Second_Name: this.lastName,
          date_birth: this.dateBirth,
          User: this.user,
          Password: CryptoJS.SHA256(this.password).toString()
        }).subscribe(data => {
          alert('El Usuario ha sido creado con éxito');
          this.router.navigate(['/login']);
        });
      }
    });
  }


}
