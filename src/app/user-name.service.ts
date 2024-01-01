import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  userNames: any[] = [
    'sam','ryan', 'cyan', 'san'
  ]
  constructor() { }
}
