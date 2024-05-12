# (4) Interface Segragation Principle (ISP)

## Description

A client should not be forced to implement an interface that it does not use.

## Solution

Divide your interfaces into multiple smaller interfaces rather than one big interface.

### For React

#### Bad

```jsx
const Drink = ({ data }) => (
  <div>
    I eat {data.food} and drink {data.drink}.
  </div>
);

const Person = () => {
  const data = {
    food: 'bread',
    drink: 'water',
    place: 'home',
  };

  // Avoid passing stuff unused!
  return <Drink data={data} />;
};
```

#### Good

```jsx
const Drink = ({ food, drink }) => (
  <div>
    I eat {food} and drink {drink}.
  </div>
);

const Person = () => {
  const data = {
    eat: 'bread',
    drink: 'water',
    sleep: 'home',
  };

  // Pass only the stuff being used.
  return <Drink drink={drink} />;
};
```
