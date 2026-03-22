import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {

  router = inject(Router); 

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/home']); 

    toast.success('Hasta luego Maricarmen')
  }

}
