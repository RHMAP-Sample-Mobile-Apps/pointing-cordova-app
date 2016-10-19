import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
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
    let that = this;
    this.navCtrl.push(ListPage, {
      user: that.user
    });
  }

  onCreate() {
    let that = this;
  }

}