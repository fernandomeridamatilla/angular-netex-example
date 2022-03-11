import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { HomeRoutingModule } from './home-routing.module';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { HomeService } from './services/home.service';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [
    MainPageComponent,
    DetailComponent,
    ListComponent,
    ListPageComponent,
    DetailPageComponent
  ],
  providers: [HomeService]
})
export class HomeModule {}
