import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CreatePage } from '../create/create';
import { User } from '../../model/domain';


@Component({
  selector: 'page-select',
  templateUrl: 'select.html'
})
export class SelectPage {
  public username?: String;
  private user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.user = navParams.get('user');
  }

  onJoin() {
    if (this.isValid()) {
      this.navCtrl.push(ListPage, {
        user: this.user
      });
    }
  }

  onCreate() {
    if (this.isValid()) {
    this.navCtrl.push(CreatePage, {
      user: this.user
    });
    }
  }
  
  private isValid(): boolean {
    if (this.username) {
      this.user = new User(this.username);
      return true
    } else {
        alert("Enter a name please");
        return false
    }
  }
}