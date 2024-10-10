import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {CommonModule, NgStyle} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CardComponent} from '../../shared/components/card/card.component';

@Component({
  selector: 'app-category-web-products',
  standalone: true,
  imports: [
    NgStyle,
    CommonModule,
    CardComponent
  ],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  activeCategoryId: number = 0;
  products: any [] = [];
  loggedInObj: any = {};
  isAddToCartApiCallInProgress: boolean = false;

  constructor(private activatedRoute: ActivatedRoute , private productService: ProductService , private toastr: ToastrService)  {
      this.activatedRoute.params.subscribe((res:any)=> {
        debugger;
        this.activeCategoryId = res.id;
        this.loadProducts();
      })

    const localData = sessionStorage.getItem('bigBasket_user');
    if (localData !== null) {
      const parseObj = JSON.parse(localData);
      this.loggedInObj = parseObj;
    }

    }

    loadProducts(){
    this.productService.getProductsByCategory(this.activeCategoryId).subscribe((res:any)=> {
      this.products = res.data;
    })
    }

  increment(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity++;
    }
  }

  decrementQuantity(product: any) {
    if (product.quantity && product.quantity > 1) {
      product.quantity--;
    }
  }

  getQuantity(product: any): number {
    return product.quantity || 1;
  }

  addToCart(product: any) {
    const localData = sessionStorage.getItem('bigBasket_user');
    if (localData !== null) {
      this.loggedInObj = JSON.parse(localData);
      const addToCartObj = {
        "cartId": 0,
        "custId": this.loggedInObj.custId,
        "productId": product.productId,
        "quantity": product.quantity || 1,
        "addedDate": new Date()
      };
      if (!product.isAddToCartApiCallInProgress) {
        product.isAddToCartApiCallInProgress = true;
        this.productService.addToCart(addToCartObj).subscribe((res: any) => {
            if (res.result) {
              product.isAddToCartApiCallInProgress = false;
              this.toastr.success("Product Added to cart");
              this.productService.cartUpdated$.next(true);
            } else {
              product.isAddToCartApiCallInProgress = false;
              this.toastr.error(res.message ? res.message : "Error adding product to cart");
            }
          },
          (err: any) => {
            product.isAddToCartApiCallInProgress = false;
            this.toastr.error(err.message ? err.message : "An error occurred while adding the product to the cart. Please try again later.");
          });
      }
    }
    else {
      this.toastr.warning("Please Login To Add Product");
    }
  }

}
