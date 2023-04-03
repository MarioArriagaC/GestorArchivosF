import { Component } from '@angular/core';
import { ArchivosService } from '../archivos.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent {
  
  files: any;
  selectedFile: any;
  constructor(private ArchivoService: ArchivosService){}

  ngOnInit(){
    this.ArchivoService.getFiles().subscribe(data => {
      this.files = data;
      console.log(data);
      
    });

    

    this.ArchivoService.editFile({
      id: 2,
      name: "morpheus.pnga",
      ruta_archivo: "./assets/files/",
      status: true
    }).subscribe(data => {
      //console.log(data)
    });
  }

 

  upload(name: any){
    const file:File = name.target.files[0];
    console.log(file)
    this.ArchivoService.uploadFile({
      name: file.name,
      ruta_archivo: "./assets/files/",
      status: true
    }).subscribe(data => {
      this.ArchivoService.getFiles().subscribe(data => {
        this.files = data;
        console.log(data);
        
      });
    });
  }
  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    console.log(fd)
    this.ArchivoService.uploadFile({
      fd
    }).subscribe(data => {
      this.ArchivoService.getFiles().subscribe(data => {
        this.files = data;
        console.log(data);
        
      });
    });
  }

  

}
