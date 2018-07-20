import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule, RoutingComponents } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule  } from '@angular/forms';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes,faSearch,faHeart,faMapMarkerAlt,faThumbtack,faComments,faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';


library.add(faTimes);
library.add(faSearch);
library.add(faHeart);
library.add(faMapMarkerAlt);
library.add(faThumbtack);
library.add(faComments);
library.add(faRegularStar);
library.add(faStar);


// components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
// import { LoginComponent } from './components/login/login.component';
// import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
// import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { CardComponent } from './components/card/card.component';
import { AdsContainerComponent } from './components/ads-container/ads-container.component';
import { environment } from './../environments/environment';
// import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatMemberComponent } from './components/chat-member/chat-member.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { MarketComponent } from './components/market/market.component';
import { ProductComponent } from './components/product/product.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDisplaySliderComponent } from './components/product-display-slider/product-display-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentComponent } from './components/comment/comment.component';
import { RatingComponent } from './components/rating/rating.component';
import { PostComponent } from './components/post/post.component';


// providers
import { ChatService } from './services/chat.service';
import { BackendService } from './services/backend.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvEf1waSEntO3T58kt17Nifd_xpXd-a2I'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent, 
    RegistrationComponent,
    // LoginComponent,
    // MapComponent,
    HeaderComponent,
    MainContentComponent,
    // HomeComponent,
    AsideComponent,
    InfoSectionComponent,
    ChatRoomComponent,
    CardComponent,
    AdsContainerComponent,
    // ImageUploadComponent,
    ChatListComponent,
    ChatMemberComponent,
    ChatBoxComponent,
    ChatAreaComponent,
    RoutingComponents,
    MarketComponent,
    ProductComponent,
    ProductInformationComponent,
    ProductDetailComponent,
    ProductDisplaySliderComponent,
    FooterComponent,
    CommentComponent,
    RatingComponent,
    PostComponent
  ],
  providers: [
    ChatService,
    BackendService,
    AuthenticationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

