import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItems = new Subject();

  addItemToCart(cartItem: any) {
    this.cartItems.next(cartItem);
  }
  clearCart() {
    this.cartItems.next(null);
  }
  getCartItems(): Observable<any> {
    return this.cartItems.asObservable();
  }
}
