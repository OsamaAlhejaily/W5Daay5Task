import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductApp';
  
  constructor(private cartService: CartService) {}
  
  getCartItemCount(): number {
    return this.cartService.getTotalItems();
  }
  
  showCart() {
    const items = this.cartService.getCartItems();
    let message = 'Your Cart:\n';
    
    if (items.length === 0) {
      message += 'Your cart is empty';
    } else {
      items.forEach(item => {
        message += `${item.name} - $${item.price} x ${item.quantity}\n`;
      });
      
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      message += `\nTotal: $${total.toFixed(2)}`;
    }
    
    alert(message);
  }
}