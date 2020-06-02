import { Component, OnInit, Input } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service.';
import { Instrumento } from 'src/app/model/instrumento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  constructor(private instrumentoServicio: InstrumentoService, private router: Router) {

  }
  
 instrumentos:Instrumento[]

 retrievedImage: any;
 base64Data: any;
 retrieveResonse: any;

 
  ngOnInit(): void {
      this.getAll()
    
  
  }

getAll(){
  this.instrumentoServicio.getAll().subscribe(data=>{
 this.instrumentos=data;
 console.log('getAll instrumentos')
  console.log(data);
 
  },
  err=>console.log('Error al cargar instrumentos'+err)
  ) 
}
showImage(picByte:string) {
 // console.log('picByte')
  //console.log(picByte)
      this.base64Data =picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;   
}
}
