import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { loginGuard } from './guards/login-guard';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: 'home'}, 
    {path: "home", component: HomeComponent}, 
    {path: "login", component: LoginFormComponent}, 
    { path: "dashboard", component: DashboardComponent, canActivate: [loginGuard], 
        children: [ 
                {path: "", pathMatch: "full", redirectTo: 'empleados'}, 
                { path: "empleados", component: EmployeeListComponent }, 
                { path: "nuevo-empleado", component: EmployeeFormComponent } ,
                { path: "actualizar-empleado/:id", component: EmployeeFormComponent } 
                  ] 
        }, 
    {path: "**", component: Error404Component}, 

];
