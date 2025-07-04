import { ProductService } from "../products/services/product.service";
import { UserService } from "../users/services/user.service";

export const SERVICE_TOKEN = 'SERVICE_TOKEN';
export const PRODUCT_SERVICE = ProductService;

export const USER_SERVICE_TOKEN = 'USER_SERVICE_TOKEN';
export const USER_SERVICE = UserService;

export const PRODUCT_API_URL = 'http://127.0.0.1:3003/products'
export const USER_API_URL = 'http://127.0.0.1:3003/auth'