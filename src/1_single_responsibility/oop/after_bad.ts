/**
 * @module solid_crockford/1_single_responsibility/oop/after_bad
 */

enum PaymentMethod {
  CreditCard = 0,
  DebitCard = 1,
  PayPal = 2,
  Combini = 3,
  CashOnDelivery = 4,
}

/**
 * SRP (Single Responsibility Principle)
 * states that we should have only 1
 * reason to change a module. If we were
 * asked to change the program so that
 * we would add a new payment method,
 * your change may also affect aonther
 * part of the program which is about
 * updating user's address. So, it is
 * clearly violating SRP.
 */
class Payment {
  private address: string;

  public update_address(address: string) {
    this.address = address;
  }

  public pay(method: PaymentMethod, price: number) {
    if (method === PaymentMethod.CreditCard) {
    }
    if (method === PaymentMethod.DebitCard) {
    }
    if (method === PaymentMethod.PayPal) {
    }
    if (method === PaymentMethod.Combini) {
    }
    if (method === PaymentMethod.CashOnDelivery) {
    }
  }
}

{
  const payment = new Payment();
  // Updating the address
  payment.update_address('Scarsdale, New York 10583');
  // Make a payment
  payment.pay(PaymentMethod.PayPal, 14.99);
}
