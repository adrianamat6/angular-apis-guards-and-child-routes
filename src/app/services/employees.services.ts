import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesServices {
  private baseUrl: string = "https://crm-empleados.onrender.com/api/empleados"; 
  private httpClient =  inject(HttpClient); 

  getAll(): Promise<IEmployee[]>{
    return lastValueFrom(this.httpClient.get<IEmployee[]>(this.baseUrl, this.getHeaders()))
  }
  
  getHeaders(){
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token') || ""
       })
    }
    return httpOptions
  }
}
