import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {ProductService} from '../../services/product/product.service';
import {TruncatePipe} from '../../shared/pipes/truncate.pipe';
import { PaginatorModule } from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {LoginService} from '../../services/login/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            TruncatePipe,
            PaginatorModule,
            EditorModule,
            ButtonModule,
            DialogModule
         ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{
  @ViewChild('productFrm') productFrm!: NgForm;
  isSidePanelVisible: boolean= true;
  displayModalProduct: boolean = false;
  productObj: productObject = new productObject();
  categoryList: any[] = [];
  productsList: any[] = [];
  filteredProductsList: any[] = [];
  isApiCallInProgress: boolean = false;
  first: number = 0;
  rows: number = 8;

  constructor(private productService: ProductService , private loginService: LoginService, private toastrService: ToastrService) {
    this.loginService.searchBox.subscribe((res: string) => {
      this.filteredProductsList = this.productsList.filter((product: any) => {
        return Object.values(product).some((val: any) => {
          return val.toString().toLowerCase().includes(res.toLowerCase());
        });
      })
    });
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
      this.categoryList = res.data;
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.productsList = res.data;
      this.filteredProductsList = res.data;
    })
  }

  onSave() {
    if (!this.isApiCallInProgress) {
      this.isApiCallInProgress = true;
      this.productService.saveProduct(this.productObj).subscribe((res: any) => {
        if (res.result) {
          this.isApiCallInProgress = false;
          this.toastrService.success("Product Created Successfully");
          this.getProducts();
          this.closeProductModal();
        } else {
          this.isApiCallInProgress = false;
          this.toastrService.error(res.message);
        }
      }, (err: any) => {
        this.isApiCallInProgress = false;
        this.toastrService.error(err.message);
      });
    }
  }

  onUpdate() {
    if (!this.isApiCallInProgress) {
      this.isApiCallInProgress = true;
      this.productService.updateProduct(this.productObj).subscribe((res: any) => {
        if (res.result) {
          this.isApiCallInProgress = false;
          this.toastrService.success("Product Updated Successfully");
          this.getProducts();
          this.closeProductModal();
        } else {
          this.isApiCallInProgress = false;
          this.toastrService.error(res.message);
        }
      }, (err: any) => {
        this.isApiCallInProgress = false;
        this.toastrService.error(err.message);
      });
    }
  }

  onEdit(item: any) {
     this.productObj = item;
     this.openProductModal();
  }

  onDelete(item: any) {
      const isDelete = confirm('Are you sure you want to delete this product?');
      if (isDelete) {
        this.productService.deleteProduct(item.productId).subscribe((res:any)=> {
          if(res.result){
            alert("Product Deleted Successfully");
            this.getProducts()
          }else{
            alert(res.message)
          }
        })
      }
  }

  openProductModal() {
    this.displayModalProduct = true;
  }

  closeProductModal() {
    this.displayModalProduct = false;
    this.onReset();
  }

  onReset() {
    this.displayModalProduct = false;
    this.productFrm.resetForm();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}

export class productObject {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: null;
  productShortName: string;
  productDescription: string;
  createdDate: Date;
  deliveryTimeSpan: string;
  categoryId: null;
  productImageUrl: string;

  constructor() {
    this.productId = 0;
    this.productSku = '';
    this.productName = '';
    this.productPrice = null;
    this.productShortName = '';
    this.productDescription = '';
    this.createdDate = new Date();
    this.deliveryTimeSpan = '';
    this.categoryId = null;
    this.productImageUrl = '';
  }
}

