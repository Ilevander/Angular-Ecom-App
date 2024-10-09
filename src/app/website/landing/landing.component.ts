import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  productList: any [] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res:any) => {
      debugger;
      this.productList = res.data;
    })
  }

}
