import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) { }

  async canActivate() {
    const isIntroShowed = await this.storage.get('isIntroShowed')

    if (isIntroShowed) {
      this.router.navigateByUrl('/menu/home')
      return true
    }
    return true
  }

}
