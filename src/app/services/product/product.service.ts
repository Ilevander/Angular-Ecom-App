import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../constant/constant';
import {map, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public cartUpdated$: Subject<boolean> = new Subject();

  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  createCategory(obj: any): Observable<any> {
    return this.http.post<any>(Constant.API_END_POINT + Constant.METHODS.CREATE_NEW_CATEGORY, obj);
  }

  getProductsByCategory(id: number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY + id);
  }

  getProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
  }

  saveProduct(obj: any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }

  updateProduct(obj: any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj);
  }

  deleteProduct(id: any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id);
  }

  addToCart(obj: any): Observable<any> {
    return this.http.post<any>(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART, obj);
  }

  getCartDataByCustId(custId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.GET_CART_BY_CUST + custId);
  }

  placeOrder(obj: any): Observable<any> {
    return this.http.post<any>(Constant.API_END_POINT + Constant.METHODS.PLACE_ORDER, obj);
  }

  removeProductByCartId(cartId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.REMOVE_CART + cartId);
  }

  getAllSalesByCustomerId(custId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_SALE_BY_CUSTOMER_ID + custId);
  }

  openSaleBySaleId(saleId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.OPEN_SALE_BY_SALE_ID + saleId);
  }

  cancelOrder(saleId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.CANCEL_ORDER_BY_SALE_ID + saleId);
  }

  updateProfile(obj: any): Observable<any> {
    return this.http.put<any>(Constant.API_END_POINT + Constant.METHODS.UPDATE_PROFILE, obj);
  }

  getCustomerById(custId: number): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.GET_CUSTOMER_BY_ID + custId);
  }

  getAllOffers(): Observable<any[]> {
    return this.http.get<any[]>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_OFFERS).pipe(map((res: any) => res.data));
  }
}
