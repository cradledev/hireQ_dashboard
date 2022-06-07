import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Config } from './config';

@Injectable()
export class ConfigService {

  public config: Config = new Config();

  constructor() {
    this.config.endpoint = environment.config.endpoint;
    this.config.hostAddress = environment.config.hostAddress;
  }

}

