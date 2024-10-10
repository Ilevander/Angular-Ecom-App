import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-web-products',
  standalone: true,
    imports: [
        NgForOf,
      CommonModule,
      RouterLink
    ],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent implements OnInit{

  productList: any [] = [];
  categoryList: any [] = [];

  constructor(private productService: ProductService , private router:Router) {
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res:any) => {
      debugger;
      this.productList = res.data;
    })
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((res:any)=> {
      this.categoryList = res.data;
    })
  }

  navigateToProducts(id:number) {
    this.router.navigate(['/products' , id])
  }
}
