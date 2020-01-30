import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public titleservice: Title
  ){
    this.titleservice.setTitle("Chaitya App");
  }

  title = 'ng6App';
}
