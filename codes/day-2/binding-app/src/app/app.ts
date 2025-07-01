import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'NA';
  width = 300;
  fmrCtrl = new FormControl('Not Available');
  names = []

  submit() {
    console.log(this.fmrCtrl.value);
  }

  // updateTitle(e: Event) {
  //   const inputElement = e.target as HTMLInputElement;
  //   this.title = inputElement.value;
  // }
  // updateTitle(newTitle: string) {
  //   this.title = newTitle;
  // }
  // updateTitle(obj: any) {
  //   console.log(obj.control.value);
  // }
}
