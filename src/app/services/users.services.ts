import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';


type IResponse = {
  "sucess"?: string; 
  "token"?: string; 
  "user"?: IUser; 
  "error"?: string; 
}


@Injectable({
  providedIn: 'root',
})
export class UsersServices {
  private baseUrl: string = "https://crm-empleados.onrender.com/api/usuarios/"; 
  private httpClient = inject(HttpClient); 

  login(user:IUser): Promise<IResponse>{
    return lastValueFrom(this.httpClient.post<IResponse>(`${this.baseUrl}/login`,user))
  }
}
