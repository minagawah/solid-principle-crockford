/**
 * @module solid_crockford/2_open_closed/oop/after_good
 */

class Product {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  /**
   * Instead of bringing in a breaking
   * change to the existing method
   * 'getPrice', you are adding a new
   * method 'applyDiscount'.
   */
  public applyDiscount(discount: number): void {
    this.price -= discount;
  }
}

{
  const product = new Product(100);
  product.getPrice(); // 100
  product.applyDiscount(15);
  product.getPrice(); // 85
}
