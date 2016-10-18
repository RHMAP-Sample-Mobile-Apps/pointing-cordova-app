import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
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
  items: Observable<Session[]>;

  ngOnInit(): void {
    this.items = this.pokerService.getSessions();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pokerService: PokerService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
