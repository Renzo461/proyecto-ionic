import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  constructor(private storage: Storage, private http: HttpClient) { }

  async loginUserLocal(credentials: any) {
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

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${this.urlServer}login`, params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK") {
          accept(data);
        } else {
          reject(data.errors)
        }
      }, (error) => {
        reject("Error en Login")
      })
    })
  }

  registerUser(userData: any) {
    let params = {
      "user": userData
    }
    return new Promise((accept, reject) => {
      this.http.post(`${this.urlServer}signup`, params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK") {
          accept(data.msg);
        } else {
          reject(data.errors)
        }
      }, (error) => {
        reject("Error al intentar registrarse")
      })
    })
  }

}
