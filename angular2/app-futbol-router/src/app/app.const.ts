import { ClasificacionComponent } from './components/pages/clasificacion/clasificacion.component';
import { EquiposComponent } from './components/pages/equipos/equipos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export class Constantes{
    static appRoutes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'clasificacion', component: ClasificacionComponent },
        { path: 'equipos', component: EquiposComponent },
        { path: '',   redirectTo: '/home', pathMatch: 'full'},
        { path: '**', component: NotFoundComponent }
    ];    
}