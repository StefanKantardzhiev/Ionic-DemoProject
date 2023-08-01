import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/', icon: 'home' },
    { title: 'Login', url: '/folder/login', icon: 'key' },
    { title: 'Register', url: '/folder/register', icon: 'chevron-forward' },
    { title: 'Logout', url: '/folder/logout', icon: 'log-out' },
  ];
  public labels = [''];
  constructor() {}
}
