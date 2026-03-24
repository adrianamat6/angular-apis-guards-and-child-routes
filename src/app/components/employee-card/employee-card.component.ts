import { Component, input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  imports: [RouterLink],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {

  employee = input<IEmployee>(); 


}
