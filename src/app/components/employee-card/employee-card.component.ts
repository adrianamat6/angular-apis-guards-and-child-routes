import { Component, input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {

  employee = input<IEmployee>(); 

  
}
