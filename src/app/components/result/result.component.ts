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
  result = { level: '', img: '' };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.score = Number(params['score']);
      this.calculateResult();
    });
  }

  calculateResult() {
    if (this.score <= 5) {
      this.result = { level: "Sarahi", img: "https://i.imgur.com/0Ei44FM.jpeg" };
    } else if (this.score <= 10) {
      this.result = { level: "Dulce", img: "https://i.imgur.com/fNmZHJH.png" };
    } else if (this.score <= 15) {
      this.result = { level: "Paloma", img: "https://i.imgur.com/CVQI9rI.png" };
    } else if (this.score <= 20) {
      this.result = { level: "Miguel", img: "https://i.imgur.com/9Z0fWag.jpeg" };
    } else if (this.score <= 25) {
      this.result = { level: "Alejandro", img: "https://i.imgur.com/9b4tjMb.png" };
    } else if (this.score <= 30) {
      this.result = { level: "Astrit", img: "https://i.imgur.com/rfv20bw.png" };
    } else {
      this.result = { level: "Victor", img: "https://i.imgur.com/L31y1xz.png" };
    }
  }
}

