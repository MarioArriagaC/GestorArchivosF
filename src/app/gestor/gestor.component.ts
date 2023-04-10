import { Component } from '@angular/core';
import { ArchivosService } from '../archivos.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent {
  file?:File;
  files: any;
  selectedFile: any;
  constructor(private ArchivoService: ArchivosService){}

  ngOnInit(){
    this.ArchivoService.getFiles().subscribe(data => {
      this.files = data;
      console.log(data);
      
    });

  }

 

  upload(name: any){
    this.file = name.target.files[0];
    console.log(this.file)
    
  }

  subir(){
    this.ArchivoService.uploadFile({
      name: this.file?.name,
      ruta_archivo: "./assets/files/",
      status: true
    }).subscribe(data => {
      this.ArchivoService.getFiles().subscribe(data => {
        this.files = data;
        console.log(data);
        
      });
    });
  }
  
  

}
