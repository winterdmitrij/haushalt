import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoModule } from './information/info.module';
import { HomeComponent } from './home/home.component';
import { DokuModule } from './dokumente/doku.module';
import { KontoStoreService } from './shared/services/konto-store.service';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

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
    ReactiveFormsModule,
    DateValueAccessorModule,
    HttpClientModule,
    InfoModule,
    DokuModule
  ],
  providers: [
    KontoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
