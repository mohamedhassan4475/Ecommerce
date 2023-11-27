import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
})
export class ProductComponent {
  @Input() data!: Product;
  @Output() prodect = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;
  addProdect() {
    this.prodect.emit({ prodectId: this.data, quantity: this.amount });
  }
}
