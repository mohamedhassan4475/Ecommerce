import { Component, OnInit } from '@angular/core';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { Product, ProductsService } from 'src/app/core/models';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  standalone: true,
  imports: [SelectComponent, CommonModule, ProductComponent, SpinnerComponent],
})
export class AllProductsComponent implements OnInit {
  // products$!: Observable<Product[]>;
  products: Product[] = [];
  categories: any;
  showAlert: boolean = false;
  loading: boolean = false;
  cartProdects: any[] = [];

  constructor(private __proService: ProductsService) {}
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }
  getAllProducts() {
    this.loading = true;
    // this.products$ = this.__proService.Products$;
    this.__proService.getAllProducts().subscribe({
      next: (res: any) => {
        this.loading = false;
        this.products = res;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
  getAllCategories() {
    this.loading = true;
    this.__proService.getAllCategories().subscribe({
      next: (res) => {
        this.loading = false;
        this.categories = res;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if (value === 'all') {
      this.loading = true;
      this.getAllProducts();
    } else {
      this.loading = true;
      this.__proService.getProductByValue(value).subscribe((res: any) => {
        this.products = res;
        this.loading = false;
      });
    }
  }
  addProdect(event: any) {
    console.log(event);

    if ('cart' in localStorage) {
      this.cartProdects = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProdects.find(
        (item) => item.prodectId.id == event.prodectId.id
      );
      if (exist) {
        alert('This product is already added to cart ' + event.id);
      } else {
        this.cartProdects.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProdects));
      }
    } else {
      this.cartProdects.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProdects));
    }
  }
}
