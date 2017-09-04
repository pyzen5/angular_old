import { Injectable } from '@angular/core';

@Injectable()
export class testService {
  getData(): string {
    return "Message from Service";
  }
}
