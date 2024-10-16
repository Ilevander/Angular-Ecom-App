
export const Constant = {

  API_END_POINT: 'https://freeapi.miniprojectideas.com/api/BigBasket/',
  API_END_POINT_USER: 'http://freeapi.gerasim.in/api/User/',

  METHODS: {
    GET_ALL_PRODUCT: 'GetAllProducts',
    GET_ALL_PRODUCT_BY_CATEGORY: 'GetAllProductsByCategoryId?=',
    GET_ALL_CATEGORY: 'GetAllCategory',
    CREATE_PRODUCT: 'CreateProduct',
    UPDATE_PRODUCT: 'UpdateProduct',
    DELETE_PRODUCT: 'DeleteProductById?id=',
    ADD_TO_CART: 'ADDTOCART',
    CREATE_NEW_CATEGORY: 'CreateNewCategory',
    LOGIN: 'Login',
    REGISTER: 'RegisterCustomer',
    USER_TOKEN_LOGIN: 'Login',
    GET_CART_BY_CUST: 'GetCartProductsByCustomerId?id=',
    PLACE_ORDER: 'PlaceOrder',
    REMOVE_CART: 'DeleteProductFromCartById?ID=',
    GET_ALL_SALE_BY_CUSTOMER_ID: 'GetAllSaleByCustomerId?id=',
    OPEN_SALE_BY_SALE_ID: 'OpenSaleBySaleId?saleId=',
    CANCEL_ORDER_BY_SALE_ID: 'cancelOrder?saleId=',
    UPDATE_PROFILE: 'UpdateProfile',
    GET_CUSTOMER_BY_ID: 'GetCustomerById?id=',
    GET_ALL_OFFERS: 'GetAllOffers',
  }
}
