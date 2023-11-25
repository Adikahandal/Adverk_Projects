import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
  loginForms= new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z_]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-z0-9]')]),
  })
  loginUser(){
    console.warn(this.loginForms.value)
  }
  get user(){
      return this.loginForms.get('user')
  }
  get password(){
      return this.loginForms.get('password')
  }
}
