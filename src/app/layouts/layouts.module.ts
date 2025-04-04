import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { VerticalComponent } from './vertical/vertical.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LayoutsComponent,
    VerticalComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [CommonModule, RouterModule, BrowserModule],
})
export class LayoutsModule {}
