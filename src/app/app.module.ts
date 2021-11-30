import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoModule } from './information/info.module';
import { HomeComponent } from './home/home.component';
import { DokuModule } from './dokumente/doku.module';
import { TokenInterceptor } from './shared/token.intercepter';
import { KontoStoreService } from './shared/services/konto-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InfoModule,
    DokuModule
  ],
  providers: [
    KontoStoreService
//    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
//    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
