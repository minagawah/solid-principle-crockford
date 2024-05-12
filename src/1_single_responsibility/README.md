# (1) Single Responsibility Principle (SRP)

## Description

A class, a module, or a function should be only responsible for one actor. So, it should have one and only one reason to change.

## Solution

Each class should have exactly one reason to change.

### For React

#### Bad
```jsx
// Responsible for too much actions!!
const Payments = () => {
  const payments = await fetchPayments();
  return <div>
    {payments.map(payment => (
      <div key={payment.id}>
        <div>{payment.name}</div>
        <div>{payment.price}</div>
      </div>
    ))}
  </div>;
}
```

#### Good
```jsx
// Split the role!
const Payment = ({ payment } => (
  <div key={payment.id}>
    <div>{payment.name}</div>
    <div>{payment.price}</div>
  </div>
);

// Split the role!
const Payments = () => {
  const payments = await fetchPayments();
  return <div>
    {payments.map(payment => (
      <Payment key={payment.id} payment={payment} />
    ))}
  </div>;
}
```

