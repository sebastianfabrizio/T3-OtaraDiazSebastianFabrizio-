import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router, private auth:AuthService, private active: ActivatedRoute){

  }

  Ejercicio1(){
    this.router.navigate(["ejercicio1"],{relativeTo:this.active } )
  }
  Ejercicio2(){
    this.router.navigate(["ejercicio2"],{relativeTo:this.active } )
  }
  logout(){
    this.auth.logout()
    this.router.navigate(["login"])
  }

}
