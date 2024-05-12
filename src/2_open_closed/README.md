# (2) Open-Closed Principle (OCP)

## Description

Objects or entities should be open for extension, but closed for modification.

## Solution:

Classes should be open for extension and closed for modification.

### For React

For the following, pass `discount`.

```jsx
const Price = ({ price }) => (
  <div>
    <div>{price} JPY</div>
  </div>
);

const Product = product => (
  <div>
    <div>{product.name}</div>
    <Price price={product.price} />
  </div>
);
```

#### Bad
```jsx
// Don't modify the existing component!!
const Price = ({ price, discount }) => (
  <div>
    <div>{price} JPY</div>
    <div>{discount} JPY</div>
  </div>
);

const Product = product => (
  <div>
    <div>{product.name}</div>
    <Price
      price={product.price}
      discount={product.discount}
    />
  </div>
);
```

#### Good
```jsx
// Create a new component instead!!
const DiscountPrice = ({ price, discount }) => (
  <div>
    <Price price={price} />
    <div>{discount} JPY</div>
  </div>
);

const Price = ({ price }) => <div>{price} JPY</div>;

const Product = ({ product }) => (
  <div>
    <div>{product.name}</div>
    <DiscountPrice
      price={product.price}
      discount={product.discount}
    />
  </div>
);
```
