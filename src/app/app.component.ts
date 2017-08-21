import { Component } from '@angular/core';
import { WampService } from './wamp.service';
import { WampTicketService } from './wamp_ticket.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <a (click)="vote('Banana')">Banana</a>
    <a (click)="vote('Chocolate')">Chocolate</a>
    <a (click)="vote('Lemon')">Lemon</a>
    <a (click)="getVersionInfo()">getVersionInfo</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Example App';

  constructor(private wampService: WampService, private wampTicketService: WampTicketService) {

  }

  vote(target) {
    this.wampService.call('io.crossbar.demo.vote.vote', [target])
      .subscribe(
        (res) => console.log('voted for', target, res),
        (err) => console.log('vote error', err),
        () => console.log('vote complete')
      );
  }

  getVersionInfo() {
    this.wampTicketService.call('cloud.info.get')
      .subscribe(
        (res) => console.log('cloudInfo success', res),
        (err) => console.log('cloudInfo error', err),
        () => console.log('cloudInfo complete')
      );

  }
}
