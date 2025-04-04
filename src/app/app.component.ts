import { Component } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-theme';

  message: any = null;
  constructor() {}
  ngOnInit(): void {}

  requestPermission() {
    const messaging = getMessaging();
  }
}
