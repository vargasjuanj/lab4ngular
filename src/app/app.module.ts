import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home//home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InstrumentoService } from './services/instrumento.service.';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { InstrumentoDetalleComponent } from './components/instrumento-detalle/instrumento-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TablaComponent,
    FormularioComponent,
    UbicacionComponent,
InstrumentoComponent,
InstrumentoDetalleComponent,
    AboutComponent,
    BuscadorComponent,
    InstrumentoComponent,
    InstrumentoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
