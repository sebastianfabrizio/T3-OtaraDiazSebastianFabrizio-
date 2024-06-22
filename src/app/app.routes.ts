import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"dashboard", component:DashboardComponent,
    canActivate:[authGuard],
    children:[
       
    ]},

    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", component: PageNotFoundComponent}
];
