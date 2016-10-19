import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokerService } from '../../service/poker';
import { Session, User } from "../../model/domain";


@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {
  selectedItem: Session;

  ngOnInit(): void {
    var that = this;
    this.pokerService.addsessionUpdatedHandler(function(user: User) {
      that.selectedItem.Users.push(user);
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
