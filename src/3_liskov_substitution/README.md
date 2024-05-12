# (3) Liskov Substitution Principle (LSP)

## Description

Let P(y) be a property provable about objects y of type A.
Then P(x) should be true for objects x of type B where B is a subtype of A.

In another word, a sub-class should be substitutable for its parent.
If the sub-class breaks when substituted, then we could say,
the sub-class is violating LCP (Liskov Substitution Principle).

## Solution

The subclass should maintain consistency with the behavior of the superclass when overriding methods.

### For React

#### Bad

```jsx
const Person = ({ food, drink, place }) => (
  <span>
    I eat {food()}, drink {drink()}, and sleep at {place()}.
  </span>
);

// This will result in error...
const Developer = ({ drink, place }) => {
  const developerDrink = () => 'coffee';
  return (
    {/* Are you not passing 'food'? */}
    <Person
      drink={developerDrink}
      place={place}
    />
  );
};

const Home = () => {
  const food = () => 'bread';
  const drink = () => 'water';
  const place = () => 'home';
  return (
    <Developer food={food} drink={drink} place={place} />
  );
};
```

#### Good

```jsx
const Person = ({ food, drink, place }) => (
  <span>
    I eat {food()}, drink {drink()}, and sleep at {place()}.
  </span>
);

// Passing the rest!!
const Developer = ({ drink, place, ...props }) => {
  const developerDrink = () => 'coffee';
  return (
    {/* We are passing '...props' now */}
    <Person
      drink={developerDrink}
      place={place}
      {...props}
    />
  );
};

const Home = () => {
  const food = () => 'bread';
  const drink = () => 'water';
  const place = () => 'home';
  return (
    <Developer food={food} drink={drink} place={place} />
  );
};
```
