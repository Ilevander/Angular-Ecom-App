import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible: boolean= true;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }

  categoryList: any[]= [];
  productsList: any[]= [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllCategory();
    this.getProducts();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((res:any)=> {
      this.categoryList = res.data
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.productsList = res.data
    })
  }

  onSave() {
       this.productService.saveProduct(this.productObj).subscribe((res:any)=> {
         if(res.result){
           alert("Product Created Successfully");
           this.getProducts()
         }else{
           alert(res.message)
         }
       })
  }

  onEdit(item: any) {
     this.productObj = item;
  }
}
