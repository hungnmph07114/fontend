import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// form date
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// autoSearch


import { AutocompleteLibModule } from 'angular-ng-autocomplete';


import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './client/footer/footer/footer.component';
import { NavComponent } from './client/nav/nav/nav.component';
import { HomeComponent } from './client/Home/home/home.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { OurRoomsComponent } from './client/our_rooms/our-rooms/our-rooms.component';
import { DeltailRoomComponent } from './client/our_rooms/deltail-room/deltail-room.component';
import { BlogDetailsComponent } from './client/blog-details/blog-details.component';
import { BlogComponent } from './client/blog/blog.component';
import { HotelSerivce } from './Service/hotel.service';
import { ClientmainComponent } from './client/clientmain/clientmain.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import { AdmintableComponent } from './admin/admintable/admintable.component';
import { SidebaradminComponent } from './admin/sidebaradmin/sidebaradmin.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { TrangchuComponent } from './admin/trangchu/trangchu.component';
import { AddhotelComponent } from './admin/addhotel/addhotel.component';
import{ServiceadminService} from  "src/app/service/serviceadmin.service";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CarouselComponent,
    OurRoomsComponent,
    DeltailRoomComponent,
    BlogDetailsComponent,
    BlogComponent,
    ClientmainComponent,
    AdminhomeComponent,
    NavbaradminComponent,
    AdmintableComponent,
    SidebaradminComponent,
    HomeadminComponent,
    TrangchuComponent,
    AddhotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   // BsDatepickerModule.forRoot(),
    FormsModule,
  AutocompleteLibModule,
  HttpClientModule
  ],
  providers: [HotelSerivce,
    ServiceadminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
