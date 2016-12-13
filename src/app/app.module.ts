import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SelectPage } from '../pages/select/select';
import { PokerService } from '../service/poker';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    ItemDetailsPage,
    ListPage,
    SelectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePage,
    ItemDetailsPage,
    ListPage,
    SelectPage
  ],
  providers: [PokerService]
})
export class AppModule {}
