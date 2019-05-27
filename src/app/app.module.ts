import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { MaterialModule } from '@/core/modules/material.module';
import { HeaderComponent } from '@cmp/header/header.component';
import { UserListComponent } from '@app/user-list/user-list.component';
import { DialogNewItemListComponent } from '@cmp/dialog-new-item-list/dialog-new-item-list.component';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { DialogListComponent } from './core/components/dialog-list/dialog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    DialogNewItemListComponent,
    DialogListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DeviceDetectorModule.forRoot()
  ],
  entryComponents: [
    DialogNewItemListComponent,
    DialogListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
