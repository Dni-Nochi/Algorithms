function makeIsBadVersion(firstBad: number) {
  return function (version: number): boolean {
    return version >= firstBad;
  };
}

const isBadVersion = makeIsBadVersion(4);

export function firstBadVersion(n: number) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else left = mid + 1;
  }
  return right;
}

console.log(firstBadVersion(5));
