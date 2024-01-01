import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsComponent } from './forms/forms.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'user',
    title: 'user Page',
    component: UserComponent,
  },
  {
    path: 'form',
    title: 'form Page',
    component: FormsComponent,
  },
];
