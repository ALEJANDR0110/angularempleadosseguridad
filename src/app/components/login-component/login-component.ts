import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajausername") cajaUsername!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  async iniciarSesion(): Promise<void> {
    let username = this.cajaUsername.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    let usuario= {
      userName: username,
      password: password
    }

    await this._service.getLogin(usuario).then((result) => {
      sessionStorage.setItem("key", result)
      console.log(sessionStorage.getItem("key"))
    }).catch((error) => {})
  }
}
