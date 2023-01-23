import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  async loginUser(credentials: any) {
    let defaultUser = {
      email: "renzo@gmail.com",
      password: "123456"
    }

    let user = await this.storage.get("user")
    if (user) {
      defaultUser = {
        email: user.email,
        password: atob(user.password)
      }
    }
    console.log(defaultUser)

    return new Promise((accept, reject) => {
      if (credentials.email == defaultUser.email && credentials.password == defaultUser.password) {
        accept("Login Exitoso")
      }
      else {
        reject("Login Fallido")
      }
    })

  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

}
