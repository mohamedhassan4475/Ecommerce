import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { Product, ProductsService } from 'src/app/core/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  data!: Product;
  loading: boolean = true;
  constructor(
    private __activateRoute: ActivatedRoute,
    private __proService: ProductsService
  ) {}
  ngOnInit() {
    this.__activateRoute.paramMap.subscribe((params: any) => {
      this.id = +params.get('id');
    });
    this.__proService.getProdect(this.id).subscribe((res: any) => {
      this.loading = false;
      this.data = res;
    });
  }
}
