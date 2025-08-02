import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class messageService {
  constructor(private _messageService: MessageService) {}

  successMeg() {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login successful!',
      life: 2000,
    });
  }
}
