import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service.';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private instrumentoServicio:InstrumentoService, private router:Router) { }

  ngOnInit(): void {
  }
buscar(texto:string){
  console.log('texto buscado ')
  console.log(texto)
this.instrumentoServicio.buscarInstrumento(texto).subscribe(data=>{
  this.router.navigate(['/instrumentoDetalle/'+data.id]);
})
}
}
