import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentQuestion = 0;
  score = 0;

  questions = [
    {
      text: "Cuando alguien te deja en visto, ¿vuelves a escribir?",
      options: [
        { text: "A veces", value: 3 },
        { text: "Solo si es importante", value: 2 },
        { text: "No", value: 1 }
      ]
    },
    {
      text: "¿Has subido una nota o historia solo para que alguien la vea?",
      options: [
        { text: "Si🥹", value: 3 },
        { text: "Nada mas una vez", value: 2 },
        { text: "Nunca", value: 1 }
      ]
    },
    {
      text: "¿Si la/lo ves con alguien mas que haces?",
      options: [
        { text: "Hablo horrible de el/ella", value: 3 },
        { text: "La/lo stalkeo", value: 2 },
        { text: "Nada", value: 1 }
      ]
    },
    {
      text: "Si te dicen 'ahorita te contesto', ¿esperas?",
      options: [
        { text: "Sí 😭", value: 3 },
        { text: "Un rato", value: 2 },
        { text: "No, sigo con mi vida", value: 1 }
      ]
    },
    {
      text: "¿Revisas si vieron tu historia?",
      options: [
        { text: "Cada 5 min", value: 3 },
        { text: "A veces", value: 2 },
        { text: "Nunca", value: 1 }
      ]
    },
    {
      text: "¨¿Conservas algo que te recuerda a esa persona aunque ya no hablen?",
      options: [
        { text: "Si", value: 3 },
        { text: "Depende de que", value: 2 },
        { text: "No, lo deseche", value: 1 }
      ]
    },
    {
      text: "¿Has justificado sus acciones aunque esten mal?",
      options: [
        { text: "Sí 😭", value: 3 },
        { text: "Algunas veces", value: 2 },
        { text: "No", value: 1 }
      ]
    },
    {
      text: "¿Has mandado mensajes largos explicando tus sentimientos?",
      options: [
        { text: "Sí", value: 3 },
        { text: "Solo una vez", value: 2 },
        { text: "No, qué oso", value: 1 }
      ]
    },
    {
      text: "¿Seguido preguntas '¿estás enojado conmigo?'",
      options: [
        { text: "Sí...", value: 3 },
        { text: "En emergencias", value: 2 },
        { text: "No", value: 1 }
      ]
    },
    {
      text: "¿Has echo alguna accion no propia de ti esperando te quiera mas?",
      options: [
        { text: "Sí", value: 3 },
        { text: "Algo equis", value: 2 },
        { text: "Para nada", value: 1 }
      ]
    },
    {
      text: "¿Hay alguna cancion que te recuerde a el/ella?",
      options: [
        { text: "Sí... muchas", value: 3 },
        { text: "Muy pocas", value: 2 },
        { text: "No. ninguna", value: 1 }
      ]
    },
    {
      text: "Si ves una notificacion de esa persona, ¿te metes rapido a ver?",
      options: [
        { text: "Sí, muy rapido", value: 3 },
        { text: "No, me espero unos minutos", value: 2 },
        { text: "No, lo checo luego", value: 1 }
      ]
    }
  ];

  constructor(private router: Router) {}

  selectOption(value: number) {
    this.score += value;

    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      // navegar al componente de resultado pasando el puntaje
      this.router.navigate(['/result'], { queryParams: { score: this.score } });
    }
  }
}
