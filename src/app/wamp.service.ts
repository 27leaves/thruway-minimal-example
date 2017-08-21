import { Injectable } from '@angular/core';
import { Client } from 'thruway.js';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WampService extends Client {

  constructor() {
    super('wss://demo.crossbar.io/ws', 'crossbardemo');
  }

}
