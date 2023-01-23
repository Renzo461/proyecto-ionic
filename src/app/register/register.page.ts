import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

// interface DocumentType {
//   id: number
//   value: string
// }

// interface Career{
//   id: number
//   value: string
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  documents = [
    {
      id: 1,
      value: "DNI"
    },
    {
      id: 2,
      value: "RUC"
    },
    {
      id: 3,
      value: "Pasaporte"
    },
    {
      id: 4,
      value: "Carnet Ext."
    },
  ]

  careers = [
    {
      id: 1,
      value: "Ing. Sistemas"
    }
  ]

  registerForm: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private authenticate: AuthenticateService
  ) {

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]+$")
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]+$")
        ])
      ),
      document_type: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      document_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]+$"),
          Validators.minLength(8)
        ])
      ),
      career: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
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
    });
  }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any) {
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }

}
