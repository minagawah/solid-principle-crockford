# (5) Dependency Inversion Principle (DIP)

## Description

Higher-level modules should use abstractions. However, they should not depend on low-level modules.

## Solution

Depend on interfaces rather than classes.

### For React

#### Bad

```jsx
const COOKIE_DAYS = 90;
const data = { name: 'Joe', age: 10 };

// Low-level
const useCookies = key => {
  const write = data => {
    const date = new Date();
    date.setTime(
      date.getTime() + 24 * 60 * 60 * 1000 * COOKIE_DAYS
    );
    document.cookie = [
      `${this.key}=${JSON.string(data)}`,
      `expires=${date.toUTCString()}`,
      `path=/`,
    ].join('; ');
  };
  return [write];
};

// High-level
const Profile = () => {
  // 'Profile' depends on 'saveCookies'
  const [saveCookies] = useCookies('profile');
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => saveCookies(data)} />
    </div>
  );
};
```

#### Good

```jsx
const data = { name: 'Joe', age: 10 };

// Abstraction
// Takes a function to execute
const useStorage = f => {
  const save = data => {
    // ...
    f(data);
  };
  return [save];
};

// Low-level
const useCookies = key => {
  const write = data => {
    const date = new Date();
    date.setTime(
      date.getTime() + 24 * 60 * 60 * 1000 * COOKIE_DAYS
    );
    document.cookie = [
      `${this.key}=${JSON.string(data)}`,
      `expires=${date.toUTCString()}`,
      `path=/`,
    ].join('; ');
  };
  return [write];
};

// High-level
const Profile = () => {
  // Passing 'saveCookies' to 'useStorage'
  // and it is no longer tightly coupled.
  const [saveCookies] = useCookies('profile');
  const [saveStorage] = useStorage(saveCookies);
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => saveStorage(data)} />
    </div>
  );
};
```
