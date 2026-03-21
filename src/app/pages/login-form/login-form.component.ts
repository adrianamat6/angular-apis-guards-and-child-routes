import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersServices } from '../../services/users.services';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {

  userService = inject(UsersServices);
  router = inject(Router); 

  async getDataForm(loginForm: NgForm){
    let loginUser: IUser = loginForm.value; 
    try{
      let response:any = await this.userService.login(loginUser); 
      if (response.success){
        toast.success(response.success)
        this.router.navigate(['/dashboard'])
      }
    }catch(data:any){
      toast.error(data.error.error)
    }
  }
}
