import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private storage: Storage = localStorage;

  getRole(): string {
    return this.storage.getItem('role')?.toLowerCase() || '';
  }

  getUserId(): string {
    if (this.getRole() === 'user') {
      return this.storage.getItem('id') || '0';
    } else return '0';
  }

  getCompanyId(): string {
    if (this.getRole() === 'company') {
      return this.storage.getItem('id') || '0';
    } else return '0';
  }

  setId(id: string): void {
    this.storage.setItem('id', id);
  }

  isLoggedIn(): boolean {
    return JSON.parse(this.storage.getItem('isLoggedIn') || 'false');
  }

  removeId(): void {
    this.storage.removeItem('id');
  }

  clearStorage(): void {
    this.storage.clear();
  }
}
