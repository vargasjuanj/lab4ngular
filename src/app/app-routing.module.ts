import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { InstrumentoDetalleComponent } from './components/instrumento-detalle/instrumento-detalle.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'instrumentos', component:InstrumentoComponent},
  {path:'instrumentoDetalle/:id', component:InstrumentoDetalleComponent},
  {path:'tabla', component:TablaComponent},
  {path:'about', component:AboutComponent},
  {path:'ubicacion',component:UbicacionComponent},
  {path:'formulario/:id', component: FormularioComponent},
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
