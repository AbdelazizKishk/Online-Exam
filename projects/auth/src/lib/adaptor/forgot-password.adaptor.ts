import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService implements Adaptor {
  constructor() {}
  adapt(data: any) {
    return {
      message: data.message,
      info: data.info,
    };
  }
}
