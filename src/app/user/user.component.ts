import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UserNameService } from '../user-name.service';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Observable, Observer } from 'rxjs';
import { StarPipe } from '../star.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [StarPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, DatePipe, CurrencyPipe, PercentPipe, JsonPipe, AsyncPipe],
  providers: [UserNameService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input() occupation: any;
  @Input() title: any;

  count: number = 0;

  userServiceWayOne = inject(UserNameService);
  userList: any[] = [];
  num = 3029521.324567644;
  cost = 4560.34;

  marks = 17.3124;
  today = new Date();

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  greeting: Promise<string> | null = null;
  arrived: boolean = false;
  private resolve: Function | null = null;

  constructor(private userServiceWayTwo: UserNameService) {
    this.userList = this.userServiceWayTwo.userNames;
    this.reset();
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  @Output() incrementCountEvent = new EventEmitter<number>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }



}
