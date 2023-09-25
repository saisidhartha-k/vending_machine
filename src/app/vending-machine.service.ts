import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {
  public products: Product[] = [];
  purchaseResult: string = '';
  selectedProductId: number | null = null; 
  selectedProduct: Product | null = null; 
  selectedQuantity: number = 1; 

  constructor() {
    this.products.push({ id: 1765, name: "Soda", price: 100, quantity: 10 });
    this.products.push({ id: 2123, name: "Chips", price: 150, quantity: 20 });
    this.products.push({ id: 3987, name: "Candy", price: 50, quantity: 15 });
  }

  getProducts()
  {
    return this.products;
  }
  purchaseProduct(productId: number): void {
    const product = this.findProduct(productId);

    if (!product) {
      this.purchaseResult = "Product not found.";
      return;
    }

    this.selectedProductId = productId;
    this.selectedProduct = product;
  }

  closeDoor(quantity : number): void {
    this.selectedQuantity = quantity;
    if (this.selectedProduct && this.selectedProductId) {
      const totalPrice = this.selectedProduct.price * this.selectedQuantity;

    
      this.selectedProduct.quantity -= this.selectedQuantity;
      this.purchaseResult = `You have purchased ${this.selectedQuantity} ${this.selectedProduct.name}(s) for ₹${totalPrice}.`;
      

      this.selectedProductId = null;
      this.selectedProduct = null;
      this.selectedQuantity = 1;
    }
  }

  getUserBalance(): number {
    return 1000; 
  }


  findProduct(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }
}
