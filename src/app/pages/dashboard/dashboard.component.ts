import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  quizzes = [
    {
      title: 'Front-end Web Development',
      description: 'Voluptatem out et dignissimos necessitatibus.',
      image: 'assets/quizzes/frontend.jpg',
    },
    {
      title: 'Front-end Web Development',
      description: 'Voluptatem out et dignissimos necessitatibus.',
      image: 'assets/quizzes/frontend.jpg',
    },
    {
      title: 'Front-end Web Development',
      description: 'Voluptatem out et dignissimos necessitatibus.',
      image: 'assets/quizzes/frontend.jpg',
    },
    {
      title: 'Front-end Web Development',
      description: 'Voluptatem out et dignissimos necessitatibus.',
      image: 'assets/quizzes/frontend.jpg',
    },
  ];
}
