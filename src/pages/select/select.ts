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
  private user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  onJoin() {
    this.navCtrl.push(ListPage, {
      user: this.user
    });
  }

  onCreate() {
    this.navCtrl.push(CreatePage, {
      user: this.user
    });
  }

}