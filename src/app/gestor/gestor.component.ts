import { Component } from '@angular/core';
import { ArchivosService } from '../archivos.service';
@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent {
  files: any;
  
  constructor(private ArchivoService: ArchivosService){}

  ngOnInit(){
    this.ArchivoService.getFiles().subscribe(data => {
      this.files = data;
      console.log(data);
      
    });

    this.ArchivoService.uploadFile({
      name: "morpheus.png",
      ruta_archivo: "./assets/files/",
      status: true
    }).subscribe(data => {
      console.log(data);
    });

    this.ArchivoService.editFile({
      id: 2,
      name: "morpheus.pnga",
      ruta_archivo: "./assets/files/",
      status: true
    }).subscribe(data => {
      console.log(data)
    });
  }

}
