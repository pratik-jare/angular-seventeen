import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DeferComponent } from './defer/defer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    provideImgixLoader('https://avatars.githubusercontent.com/u/'),
  ],
  imports: [RouterLink, RouterOutlet, UserComponent, DeferComponent, NgOptimizedImage, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-seventeen';
  name = 'sample'
  isLoggedIn = 4;
  caseId = 3;
  operatingSystems: any = [];//[{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  imageURL = 'https://avatars.githubusercontent.com/u/139426?s=48&v=4'
  isEditable = false;
  message = '';
  items = new Array();

  logoUrl = '139426?s=48&v=4'
  logoAlt = 'image src angular '

  greet() {
    this.message = 'Hello, there 👋';
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(item: any) {
    this.items.push(item);
  }

}
