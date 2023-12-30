import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input() occupation: any;
  @Input() title: any;

  count: number = 0;

  @Output() incrementCountEvent = new EventEmitter<number>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
