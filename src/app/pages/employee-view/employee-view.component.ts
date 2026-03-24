import { Component, inject, input, signal } from '@angular/core';
import { EmployeesServices } from '../../services/employees.services';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  imports: [RouterLink],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css',
})
export class EmployeeViewComponent {

  id = input<string>(); 
  employeeService = inject(EmployeesServices); 
  miEmployee = signal<IEmployee | null>(null); 

  ngOnInit(){
    this.cargarContenido(); 
  }

  async cargarContenido(){
    try{
      if(this.id()){
          this.miEmployee.set(await this.employeeService.getById(this.id())) ; 
      }
    }catch(dataError){
      console.log(dataError); 
    }

  }

}
