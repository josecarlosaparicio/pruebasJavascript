import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppMain } from './components/main/main.component';
import { ClasificacionComponent } from './components/pages/clasificacion/clasificacion.component';
import { EquiposComponent } from './components/pages/equipos/equipos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AppFooterComponent } from './components/common/footer/app-footer.component';
import { AppHeaderComponent } from './components/common/header/app-header.component';
import { MenuComponent } from './components/common/menu/menu.component';

import { HttpService } from './services/http-service.service';
import { FutbolService } from './services/futbol.service';

import { Constantes } from './app.const';

@NgModule({
  declarations: [
    AppMain,
    ClasificacionComponent,
    EquiposComponent,
    HomeComponent,
    AppFooterComponent,
    AppHeaderComponent,
    MenuComponent,
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Constantes.appRoutes)
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    },
    FutbolService
  ],
  bootstrap: [AppMain]
})
export class AppModule { }
