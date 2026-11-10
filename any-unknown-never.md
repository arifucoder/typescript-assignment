# any, unknown and never in TypeScript

## Introduction

TypeScript types work like a tree. At the top are types that can hold any value, and at the bottom is a type that can hold no value at all. Three special types help us understand this: `any`, `unknown` and `never`.

## `any`

`any` turns off type checking. We can do anything with it, so mistakes only show up when the code runs.

```ts
let data: any = "hello";
data.toFixed(2);
```

## `unknown`

`unknown` can also hold any value, but we must check its type before using it. This makes it a safe version of `any`.

```ts
function getLength(value: unknown): number {
  if (typeof value === "string") {
    return value.length;
  }
  return 0;
}
```

If we write `value.length` without the check, TypeScript shows an error. That is why `unknown` is better for things like API data or user input.

## `never`

`never` is at the bottom. It means a value that can never happen. A function that always throws an error returns `never`. It is also useful to make sure we handled every case.

```ts
type Status = "success" | "error";

function handle(status: Status): string {
  switch (status) {
    case "success": return "Done";
    case "error": return "Failed";
    default:
      const unreachable: never = status;
      return unreachable;
  }
}
```

If we add a new status later and forget to handle it, TypeScript will give an error.

## Conclusion

`any` removes type safety, `unknown` keeps it by forcing a check, and `never` marks impossible cases. So we should use `unknown` instead of `any` whenever possible.