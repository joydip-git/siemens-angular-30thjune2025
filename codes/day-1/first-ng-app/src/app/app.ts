import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title: string = 'NA'

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
  callMeHandler() {
    window.alert('Button Clicked!');
  }
}
