import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService implements Adaptor {
  constructor() {}
  adapt(data: any) {
    return {
      message: data.message,
      token: data.token,
    };
  }
}
