import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
