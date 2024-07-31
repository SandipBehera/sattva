import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ThankyouComponent,
    MasterpageComponent,
    CarouselComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
