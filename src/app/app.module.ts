import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoModule } from './information/info.module';
import { HomeComponent } from './home/home.component';
import { DokuModule } from './dokumente/doku.module';
import { KontoStoreService } from './shared/services/konto-store.service';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DateValueAccessorModule,
    HttpClientModule,
    InfoModule,
    DokuModule,
    SharedModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    KontoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
