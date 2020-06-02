import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service.';
import { Instrumento } from 'src/app/model/instrumento';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-instrumento-detalle',
  templateUrl: './instrumento-detalle.component.html',
  styleUrls: ['./instrumento-detalle.component.css']
})
export class InstrumentoDetalleComponent implements OnInit {
  

  constructor(private instrumentoServicio: InstrumentoService,  private router: Router, private ruta: ActivatedRoute) {}

 instrumento:Instrumento;
 retrievedImage: any;
 base64Data: any;
 
  ngOnInit(): void {
    this.load()
  }

  load() {
    this.ruta.params.subscribe(params => {
     this.getOne(params['id'])
    },
    err=>console.log("Error al buscar el instrumento "+err)
    )
  }
  
getOne(id:number){
  this.instrumentoServicio.getOne(id).subscribe(data=>{
this.instrumento=data;
 console.log(data);
},
  err=>console.log('Error al cargar el instrumento'+err)
  ) 
}

showImage(picByte:string) {
  // console.log('picByte')
   //console.log(picByte)
       this.base64Data =picByte;
       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;   
 }
  
}
