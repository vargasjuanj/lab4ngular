import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/model/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service.';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {




  instrumentos: Instrumento[] 
  public instrumentoActual: Instrumento = {
    id: null,
    instrumento:'',
    marca: '',
    modelo: '',
    precio: null,
    costoEnvio: '',
    cantidadVendida: null,
    descripcion: '',
    nombreImagen:'',
    
      imagen:{
        id:null,
        name:'',
        picByte:'',
        type:''
      }
      

  };
  instrumento:Instrumento={
    id: null,
    instrumento:'',
    marca: '',
    modelo: '',
    precio: null,
    costoEnvio: '',
    cantidadVendida: null,
    descripcion: '',
    nombreImagen:'',
    
      imagen:{
        id:null,
        name:'',
        picByte:'',
        type:''
      }
      

  }

  constructor(private instrumentoService: InstrumentoService) { }

  ngOnInit(): void {
    this.getAll()
  }

getAll(){
  
  this.instrumentoService.getAll().subscribe(
   
    data => {
        console.log(data)
        this.instrumentos = data;
      },
      err => {
        console.log('errorrr ! ', err)
      }
    );
}


save(){
  this.instrumentoService.post(this.instrumento).subscribe(
    data => {
      console.log(data)
    },
    err => {

     
      console.log('errorrr ! ', err)
    }
  );
}
delete(instrumento:Instrumento){
  const opcion = confirm('¿Desea eliminar este registro?');
  if (opcion === true) {
    this.instrumentoService.delete(instrumento.id).subscribe(
      res => {
        alert('El registro fue eliminado con éxito');
        const indexInstrumento = this.instrumentos.indexOf(instrumento);
        this.instrumentos.splice(indexInstrumento, 1);
      }
    );
  }
}
onPreUpdate(instrumento:Instrumento){
  this.instrumentoActual = instrumento;
}
}