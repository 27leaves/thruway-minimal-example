import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WampService } from './wamp.service';
import { WampTicketService } from './wamp_ticket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WampService, WampTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
