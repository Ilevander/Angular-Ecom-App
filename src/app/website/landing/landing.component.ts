import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

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
