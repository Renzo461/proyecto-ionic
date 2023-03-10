import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  documents = [
    {
      id: 1,
      value: "cc"
    },
    {
      id: 2,
      value: "ti"
    },
    {
      id: 3,
      value: "ce"
    },
    {
      id: 4,
      value: "ps"
    },
    {
      id: 4,
      value: "rc"
    },
  ]

  careers = [
    {
      id: 1,
      value: "sistemas"
    },
    {
      id: 2,
      value: "industrial"
    },
    {
      id: 3,
      value: "contaduria"
    },
    {
      id: 4,
      value: "administracion"
    }
  ]

  registerForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController: AlertController
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
    this.authenticate.registerUser(register_form)
      .then(() => {
        this.navCtrl.navigateForward("/login");
      })
      .catch(err => {
        this.presentAlert("Opps", "Hubo un error", err);
      })
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

}
