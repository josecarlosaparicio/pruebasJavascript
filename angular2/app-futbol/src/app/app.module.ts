import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FutbolService } from './services/futbol.service';
import { AppComponent } from './app.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { EquipoComponent } from './components/equipo/equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [FutbolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
