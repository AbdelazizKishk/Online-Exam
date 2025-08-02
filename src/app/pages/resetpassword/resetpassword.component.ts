import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'auth';

@Component({
  selector: 'app-resetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css',
})
export class ResetpasswordComponent {
  _authService = inject(AuthService);
  _router = inject(Router);

  step: number = 1;

  verfiyEmailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  verfiyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });
  verfiyNewpassForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ]),
  });

  onSubmitEmail() {
    this._authService.forgotPassword(this.verfiyEmailForm.value).subscribe({
      next: (res) => {
        if ((res.message = 'success')) {
          this.step = 2;
        }
      },
      error: () => {},
    });
  }
  onSubmitCode() {
    this._authService.verifyResetCode(this.verfiyCodeForm.value).subscribe({
      next: (res) => {
        if ((res.status = 'Success')) {
          this.step = 3;
        }
      },
      error: () => {},
    });
  }
  onSubmitNewPassword() {
    this._authService.resetPassword(this.verfiyNewpassForm.value).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('examtoken', res.token);
          this._router.navigate(['/home']);
        }
      },
      error: () => {},
    });
  }
}
