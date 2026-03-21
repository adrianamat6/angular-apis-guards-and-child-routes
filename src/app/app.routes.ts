import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: 'home'}, 
    {path: "home", component: HomeComponent}, 
    {path: "login", component: LoginFormComponent}, 
    {path: "dashboard", component: DashboardComponent, canActivate:[loginGuard]}, 
    {path: "**", component: Error404Component}, 

];
