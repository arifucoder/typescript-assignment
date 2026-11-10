# Type Narrowing in TypeScript

## Introduction

Sometimes a variable can have more than one type, like `string | number`. TypeScript does not let us use string methods on it directly, because it is not sure which type it is. Type narrowing means checking the value first, so TypeScript knows the exact type inside that block. Here I will show three easy ways to do it.

## Using `typeof`

`typeof` is used for primitive types like string, number and boolean.

```ts
function showId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(0);
}
```

Inside the `if` block, `id` is a string. After that, TypeScript knows it can only be a number.

## Using `instanceof`

`instanceof` is used when the value is an object made from a class.

```ts
class Dog { bark(): string { return "Woof"; } }
class Cat { meow(): string { return "Meow"; } }

function speak(pet: Dog | Cat): string {
  return pet instanceof Dog ? pet.bark() : pet.meow();
}
```

## Using `in`

Plain objects do not have a class, so `instanceof` will not work on them. In that case, we can check if a property exists using `in`.

```ts
type Admin = { permissions: string[] };
type Guest = { visitCount: number };

function describe(user: Admin | Guest): string {
  if ("permissions" in user) {
    return `Admin with ${user.permissions.length} permissions`;
  }
  return `Guest visited ${user.visitCount} times`;
}
```

## Conclusion

Type narrowing helps us use union types safely without using `any`. Use `typeof` for primitives, `instanceof` for classes and `in` for objects. This way we get fewer bugs and better autocomplete.