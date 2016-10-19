import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { PokerService } from '../../service/poker';
import { Session } from "../../model/domain";
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  selectedItem: any;
  icons: string[];
  items: Session[];

  ngOnInit(): void {
    var that = this;
    this.pokerService.getSessions().subscribe(function(items) {
      that.items = items;
    });
    this.pokerService.addSessionHandler(function(session: Session) {
      that.items.push(session);
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item: Session) {
    let that = this;
    this.pokerService.joinSession(item.Name, "Erik").then(function(session: Session) {
      that.navCtrl.push(ItemDetailsPage, {
        item: session
      });
    });
  }
}
