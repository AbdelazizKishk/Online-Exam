import { Observable } from 'rxjs';
import { Register } from '../interfaces/register';
import { login } from '../interfaces/login/login';
import { Icode } from '../interfaces/icode';
import { Forgetpass } from '../interfaces/forgetpass';
import { Newpass } from '../interfaces/newpass';

export abstract class AuthAPI {
  abstract signup(data: object): Observable<Register>;
  abstract signin(data: object): Observable<login>;
  abstract changePassword(data: any): Observable<any>;
  abstract deleteMyAccount(data: any): Observable<any>;
  abstract editProfile(data: any): Observable<any>;
  abstract logout(data: any): Observable<any>;
  abstract getLoggedUserInfo(data: any): Observable<any>;
  abstract forgotPassword(data: object): Observable<Forgetpass>;
  abstract verifyResetCode(data: object): Observable<Icode>;
  abstract resetPassword(data: any): Observable<Newpass>;
}
