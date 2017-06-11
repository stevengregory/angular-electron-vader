import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  darthVader = 'assets/nooo.mp3';

  constructor() {}

  ngOnInit() {
    const sound = new Audio(this.darthVader);
      sound.oncanplay = () => {
      sound.play();
    };
  }
}
