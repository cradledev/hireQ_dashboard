import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VdoPlayerRoutingModule } from './vdo-player-routing.module';
import { VdoPlayerComponent } from './vdo-player.component';

// ng video module 
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    VdoPlayerComponent
  ],
  imports: [
    CommonModule,
    VdoPlayerRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  exports : [
    VdoPlayerComponent
  ]
})
export class VdoPlayerModule { }
