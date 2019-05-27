import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { MaterialModule } from '@/core/modules/material.module';
import { HeaderComponent } from '@cmp/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
