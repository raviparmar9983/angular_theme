import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp } from 'firebase/app';
initializeApp({
  apiKey: 'AIzaSyAt47YgNFHdS4Qyy8Gz574gzVZLhU5IRRc',
  authDomain: 'pushnotification-6b48d.firebaseapp.com',
  projectId: 'pushnotification-6b48d',
  storageBucket: 'pushnotification-6b48d.firebasestorage.app',
  messagingSenderId: '231389404738',
  appId: '1:231389404738:web:273dc46faefc4f6d7197db',
  measurementId: 'G-C0MFVHHZH1',
});
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
