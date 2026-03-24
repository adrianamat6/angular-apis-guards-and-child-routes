import { Component, input } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  imports: [],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css',
})
export class EmployeeViewComponent {

  id = input<string>(); 
  
}
