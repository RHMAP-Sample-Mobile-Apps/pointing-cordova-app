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
  private showVotes: boolean = false;

  ngOnInit(): void {
    var that = this;
    this.pokerService.addsessionUpdatedHandler(function(user: User) {
      that.session.Users.push(user);
    });
    this.pokerService.addVoteUpdatedHandler(function(user: User) {
      let found = that.session.Users.find(u => u.Name == user.Name);
      found.Vote = user.Vote;
    });
    this.pokerService.addFinishHandler(function(command: string) {
      that.showVotes = "showVotes" === command;
    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    this.session = navParams.get("session");
    this.user = navParams.get("user");
  }

  castVote() {
    this.pokerService.castVote(this.session.Name, this.user);
  }

  showClicked() {
    this.pokerService.showVotes(this.session.Name);
  }
}
