import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private static instance = 0;
  private currentInstance: number;

  constructor() {
    this.currentInstance = AuthService.instance++;
  }

  public get info(): string {
    return 'AuthService, instance: ' + this.currentInstance;
  }
}
