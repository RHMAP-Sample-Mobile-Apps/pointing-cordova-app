import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectPage } from '../select/select';
import { User } from '../../model/domain';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(SelectPage, {
        user: new User(this.login.username)
      });
    }
  }
}