import { Injectable } from '@angular/core';

import { CommonService } from './common.service';
import { Instrumento } from '../model/instrumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService extends CommonService<Instrumento>{
  protected miUrl = 'http://localhost:8080/api/v1/instrumentos/';



  upload(uploadImageData:FormData):Observable<any>{
  return  this.http.post('http://localhost:8080/image/upload', uploadImageData,{ observe: 'response' })
  }

  getImage(imageName:string):Observable<any>{
    return this.http.get('http://localhost:8080/image/get/' + imageName)
  }
  buscarInstrumento(texto: string) {
    return this.http.get<Instrumento>(this.miUrl+'buscar?termino=' + texto);
  }

}