import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthEndPoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { ChangePasswordService } from './adaptor/change-password.adaptor';
import { DeleteMyAccountService } from './adaptor/delete-my-account.adaptor';
import { EditProfileService } from './adaptor/edit-profile.adaptor';
import { ForgotPasswordService } from './adaptor/forgot-password.adaptor';
import { VerifyResetCodeService } from './adaptor/verify-reset-code.adaptor';
import { Register } from './interfaces/register';
import { login } from './interfaces/login/login';
import { Forgetpass } from './interfaces/forgetpass';
import { Icode } from './interfaces/icode';
import { Newpass } from './interfaces/newpass';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI {
  _httpClient = inject(HttpClient);
  _authAPIAdaptorService = inject(AuthAPIAdaptorService);
  _changePasswordService = inject(ChangePasswordService);
  _deleteMyAccountService = inject(DeleteMyAccountService);
  _editProfileService = inject(EditProfileService);
  _forgotPasswordService = inject(ForgotPasswordService);
  _verifyResetCodeService = inject(VerifyResetCodeService);

  signup(data: object): Observable<Register> {
    return this._httpClient.post(AuthEndPoint.signup, data).pipe(
      map((res) => this._authAPIAdaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  signin(data: object): Observable<login> {
    return this._httpClient.post(AuthEndPoint.signin, data).pipe(
      map((res) => this._authAPIAdaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  changePassword(data: object): Observable<any> {
    return this._httpClient.patch(AuthEndPoint.changePassword, data).pipe(
      map((res) => this._changePasswordService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  deleteMyAccount(): Observable<any> {
    return this._httpClient.delete(AuthEndPoint.deleteMyAccount).pipe(
      map((res) => this._deleteMyAccountService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  editProfile(data: any): Observable<any> {
    return this._httpClient.put(AuthEndPoint.editProfile, data).pipe(
      map((res) => this._editProfileService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  logout(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.logout).pipe(
      map((res) => this._deleteMyAccountService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  getLoggedUserInfo(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.getloggedUserInfo).pipe(
      map((res) => this._editProfileService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  forgotPassword(data: object): Observable<Forgetpass> {
    return this._httpClient.post(AuthEndPoint.forgotPassword, data).pipe(
      map((res) => this._forgotPasswordService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  verifyResetCode(data: object): Observable<Icode> {
    return this._httpClient.post(AuthEndPoint.verifyResetCode, data).pipe(
      map((res) => this._verifyResetCodeService.adapt(res)),
      catchError((err) => of(err))
    );
  }
  resetPassword(data: any): Observable<Newpass> {
    return this._httpClient.put(AuthEndPoint.resetPassword, data).pipe(
      map((res) => this._changePasswordService.adapt(res)),
      catchError((err) => of(err))
    );
  }
}
