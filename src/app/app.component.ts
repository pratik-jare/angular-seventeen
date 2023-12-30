import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DeferComponent } from './defer/defer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, DeferComponent, CommonModule, RouterOutlet],
  template: `
  {{title}}
  <!-- <app-user></app-user> -->
  @if (isLoggedIn == 1) {
      <p>Welcome back, Friend!</p>
    } @else if(isLoggedIn == 2) {
      <p>turned Off!</p>
    } @else {
      <p> Cas Els </p>
    }
    @for (item of operatingSystems; track item.id) {
      {{item.name}}<br>
    } @empty {
      <p>will be printed  operatingSystems   an empty  array </p>
    }
    <img alt="photo" [src]="imageURL">
    <div [contentEditable]="false">
      Sample Datag
      <input type="text" name="sample" id="">
    </div>
    <button (click)="greet()">greet</button>
    <section (mouseover)="onMouseOver()">

    {{message}}

    <app-user (incrementCountEvent)="addItem($event)" ></app-user>

    <p>🐢  the way down {{ items.length }}</p>


    @switch (caseId) {
      @case (1) {
        <p>one</p>
      }
      @case (2) {
        <p>two</p>
      }
      @case (3) {
        <p>three</p>
      }
      @default {
        <p>default</p>
      }
    }

    @defer {
       <app-defer></app-defer>
    }  @placeholder  {
      <p>Future comments</p>
    } @loading (minimum 5s)  {
      <p>Loading comments...</p>
    }


    @defer (on interaction;when caseId == 5) {
      <app-defer></app-defer>
    } @placeholder (minimum 1s)  {
      <p>Future comments</p>
    }

    <div #greeting>Hello!</div>

    @defer (on interaction(greeting)) {
      <p>Future Hi</p>
    }


    <div #greeting>Bye!</div>

    @defer (on hover(greeting)) {
      <p>Future Bye</p>
    }

    @defer (on immediate) {
      <p>Future immediate</p>
    } @placeholder {
      <p>Future placeholder</p>
    }


    @defer (on timer(500ms)) {
      <p>Future timer</p>
    } @placeholder {
      <p>timer placeholder</p>
    }

    @defer (on interaction; prefetch on idle; on timer(2s)) {
      <p>defer interaction prefetch</p>
    } @placeholder {
      <p>defer interaction prefetch placeholder</p>
    }

<!--
    <app-user [title]="name"></app-user>

    <app-user occupation="Angular Developer"></app-user> -->


  `,
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
