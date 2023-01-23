import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  validationMessage = {
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "La contraseña es Obligatoria" },
      { type: "minlength", message: "Tu contraseña debe tener minimo 5 caracteres" }
    ]
  }
  errorMessage: any

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    })
  }

  ngOnInit() {
  }

  loginUser(credentials: any) {    
    this.auth.loginUser(credentials)
      .then(res => {
        this.errorMessage = ""
        this.storage.set("isUserLoggedIn", true)
        this.navCtrl.navigateForward("/menu/home")
      })
      .catch(err => {
        this.errorMessage = err
      })
  }

  register(){
    this.navCtrl.navigateForward("/register")
  }

}
