import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root',
})
export class VerifyResetCodeService implements Adaptor {
  constructor() {}
  adapt(data: any) {
    return {
      status: data.status,
    };
  }
}
