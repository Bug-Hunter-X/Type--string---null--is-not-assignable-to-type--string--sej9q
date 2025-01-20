function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  } else {
    return `Hello, ${name}!`;
  }
} 