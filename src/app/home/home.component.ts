import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3><div class="image"></div>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }
}
