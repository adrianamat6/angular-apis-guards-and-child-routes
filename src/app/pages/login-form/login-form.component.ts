import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {

  getDataForm(loginForm: NgForm){
    let loginUser: IUser = loginForm.value; 
    console.log(loginUser); 
  }
}
