import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersServices } from '../../services/users.services';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {

  userService = inject(UsersServices);

  async getDataForm(loginForm: NgForm){
    let loginUser: IUser = loginForm.value; 
    try{
      let response = await this.userService.login(loginUser); 
      console.log(response)
    }catch(data:any){
      console.log(data.error.error); 
    }
  }
}
