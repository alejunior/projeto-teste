import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  public taskTitle: string = "Task Manager";

  public constructor() {
  }


}