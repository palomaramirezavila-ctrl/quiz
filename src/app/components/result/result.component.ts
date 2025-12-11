import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  score = 0;
  result = { name: '', img: '' };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.score = Number(params['score']);
      this.calculateResult();
    });
  }

  calculateResult() {
    if (this.score <= 16) {
      this.result = {
        name: "Sarahi",
        img: "https://i.imgur.com/0Ei44FM.jpeg"
      };
    } else if (this.score <= 20) {
      this.result = {
        name: "Dulce",
        img: "https://i.imgur.com/fNmZHJH.png"
      };
    } else if (this.score <= 24) {
      this.result = {
        name: "Paloma",
        img: "https://i.imgur.com/CVQI9rI.png"
      };
    } else if (this.score <= 28) {
      this.result = {
        name: "Miguel",
        img: "https://i.imgur.com/9Z0fWag.jpeg"
      };
    } else if (this.score <= 31) {
      this.result = {
        name: "Alejandro",
        img: "https://i.imgur.com/9b4tjMb.png"
      };
    } else if (this.score <= 34) {
      this.result = {
        name: "Astrit",
        img: "https://i.imgur.com/rfv20bw.png"
      };
    } else {
      this.result = {
        name: "Víctor",
        img: "https://i.imgur.com/L31y1xz.png"
      };
    }
  }
}
