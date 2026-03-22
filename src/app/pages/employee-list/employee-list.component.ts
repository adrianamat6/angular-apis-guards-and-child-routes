import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { EmployeesServices } from '../../services/employees.services';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  arrEmployees: IEmployee[] = []; 
  employeesServices = inject(EmployeesServices); 

  ngOnInit(){
    this.cargarEmpleados()
  }

  async cargarEmpleados(){

    try{
      this.arrEmployees = await this.employeesServices.getAll(); 
      console.log(this.arrEmployees); 
    }catch(error){
      console.log(error); 
    }

  }
}


