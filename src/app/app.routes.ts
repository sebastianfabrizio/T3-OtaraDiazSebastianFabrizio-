import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ejercicio1Component } from './dashboard/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './dashboard/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './dashboard/ejercicio3/ejercicio3.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"dashboard", component:DashboardComponent,
    canActivate:[authGuard],
    children:[
        {path:"ejercicio1", component:Ejercicio1Component},
        {path:"ejercicio2", component:Ejercicio2Component},
        {path:"ejercicio3", component:Ejercicio3Component}
    ]},

    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", component: PageNotFoundComponent}
];
