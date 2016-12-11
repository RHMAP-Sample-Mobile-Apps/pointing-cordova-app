import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokerService } from '../../service/poker';
import { ItemDetailsPage } from '../item-details/item-details';
import { Session } from '../../model/domain';


@Component({
  templateUrl: 'create.html'
})
export class CreatePage {
  public session: Session = new Session("");
  public submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    this.session.CreatedBy = navParams.get('user');
  }

  onCreate(form) {
    this.submitted = true;

    if (form.valid) {
      let that = this;
      this.pokerService.createSession(this.session).then(function(session: Session) {
        that.navCtrl.push(ItemDetailsPage, {
          session: that.session,
          user: that.session.CreatedBy
        });
      });
    }
  }
}