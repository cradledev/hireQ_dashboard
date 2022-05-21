import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

import { SidebarModule } from './components/sidebar/sidebar.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { SecureInnerPagesGuard } from './services/auth/secure-inner-pages.guard';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    SecureInnerPagesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
