export function palindromeNumber(x: number): boolean {
  if (x <= 9) {
    return false;
  }
  const value = String(x).split('').reverse().join('');

  return Number(value) === x;
}

// console.log(palindromeNumber(1221));
