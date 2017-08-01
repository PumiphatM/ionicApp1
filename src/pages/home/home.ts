import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = ChatPage;
  tab2 = CalendarPage;

  constructor() {}

}
