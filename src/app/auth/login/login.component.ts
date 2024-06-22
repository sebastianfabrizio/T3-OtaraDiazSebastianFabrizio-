import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router){

  }

  logueo={
    user:"",
    password:""
  }

  login(){
    let usuario =this.logueo.user
    let password = this.logueo.password
  
    if(usuario=="Otara" && password=="12345"){

      this.auth.logintrue(usuario, password)
      this.router.navigateByUrl("/dashboard")
    }
    else{
      this.auth.loginfalse(usuario, password)
      this.router.navigate(["login"])
    }

  }
}
