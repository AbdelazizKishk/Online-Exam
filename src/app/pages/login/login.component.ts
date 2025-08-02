import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { messageService } from '../../shared/primeng/message.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, Toast, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnDestroy {
  isLoading: boolean = false;
  private intervalId: any;
  loginForm: FormGroup;
  _authService = inject(AuthService);
  _messageService = inject(messageService);
  _router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._authService.signin(this.loginForm.value).subscribe({
        next: (res) => {
          if ((res.message = 'success')) {
            this._messageService.successMeg();
            this.loginForm.reset();
          }
          this.isLoading = false;
          localStorage.setItem('examtoken', res.token);
          this.intervalId = setInterval(() => {
            this._router.navigate(['/home']);
          }, 3000);
        },
        error: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
