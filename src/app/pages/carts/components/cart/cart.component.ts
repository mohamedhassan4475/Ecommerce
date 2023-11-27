import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsService } from '../../../../core/models/services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  total: number = 0;
  cartProdects: any = [];
  number: number = 1;
  success: boolean = false;
  constructor(private cartService: CartsService) {}
  ngOnInit(): void {
    this.getProdect();
  }
  getProdect() {
    if ('cart' in localStorage) {
      this.cartProdects = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  minsAmount(index: number) {
    this.cartProdects[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProdects));
  }
  addAmount(index: number) {
    this.cartProdects[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProdects));
  }
  changeDetect() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProdects));
  }
  deleteProdect(index: number) {
    this.getCartTotal();
    this.cartProdects.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProdects));
  }
  clearData() {
    this.getCartTotal();
    this.cartProdects = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProdects));
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProdects) {
      this.total +=
        this.cartProdects[x].prodectId.price * this.cartProdects[x].quantity;
    }
  }
  addCart() {
    let prodect = this.cartProdects.map((item: any) => {
      console.log(item.prodectId);

      return { prodectId: item.prodectId.id, quantity: item.quantity };
    });
    console.log(prodect);

    let model = {
      userId: 4,
      data: new Date(),
      prodects: prodect,
    };
    this.cartService
      .createOrder(model)
      .subscribe((res) => (this.success = true));
  }
}
