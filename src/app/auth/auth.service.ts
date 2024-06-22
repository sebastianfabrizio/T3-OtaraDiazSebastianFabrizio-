import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logintrue(usuario:string, password:string){
    sessionStorage.setItem("isLogged", 'true')
  }
  loginfalse(usuario:string, password:string){
    sessionStorage.setItem("isLogged", 'false')
  }

  logout(){
    sessionStorage.clear()
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged")
  }
}
