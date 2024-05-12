/**
 * @module solid_crockford/2_open_closed/oop/after_bad
 */

class Product {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  /**
   * Violating OCP because you are
   * bringing in a breaking change to
   * the existing method 'getPrice'.
   * You should add a new method instead.
   */
  public getPrice(discount: number = 0): number {
    return this.price - discount;
  }
}

{
  const product = new Product(100);
  product.getPrice(15); // 85
}
