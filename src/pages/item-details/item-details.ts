import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokerService } from '../../service/poker';
import { Session, User } from "../../model/domain";


@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {
  private session: Session;
  private user: User;

  ngOnInit(): void {
    var that = this;
    this.pokerService.addsessionUpdatedHandler(function(user: User) {
      let found = that.session.Users.find(u => u.Name == user.Name);
      if (found) {
        found.Vote = user.Vote;
      } else {
        that.session.Users.push(user);
      }
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    this.session = navParams.get("session");
    this.user = navParams.get("user");
  }

  castVote() {
    this.pokerService.castVote(this.session.Name, this.user);
  }
}
