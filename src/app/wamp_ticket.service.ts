import { Injectable } from '@angular/core';
import { Client } from 'thruway.js';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WampTicketService extends Client {

  constructor() {
    super('wss://release.flatout-technologies.com/router/',
      'gateway', {
        authmethods: ['ticket']
      });

    this.onChallenge(challenge => {
      const ticketMethod = challenge.filter((msg) => msg.authMethod === 'ticket');

      return ticketMethod.flatMapTo(Observable.of('anonymous'));
    });
  }

}
