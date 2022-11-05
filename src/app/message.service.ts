import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new BehaviorSubject<any>({ text: 'Helloo' });

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessages() {
    this.subject.next(null);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
