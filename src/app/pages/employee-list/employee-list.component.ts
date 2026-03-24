import { Component, inject, signal } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { EmployeesServices } from '../../services/employees.services';
import { toast } from 'ngx-sonner';
@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  arrEmployees = signal<IEmployee[]>([])
  employeesServices = inject(EmployeesServices); 

  ngOnInit(){
    this.cargarEmpleados()
  }
 
async cargarEmpleados(){
  try{
    this.arrEmployees.set(await this.employeesServices.getAll()); 
    console.log(this.arrEmployees()); 
  } catch(dataError:any){
    toast.error('No se pudieron cargar los datos'); 
  }
}
}


