export function longestCommonPrefix(strs: string[]): string {
  let minLength = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    if (minLength > strs[i].length) {
      minLength = strs[i].length;
    }
  }

  for (let j = 0; j < minLength; j++) {
    const char = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== char) {
        return strs[0].slice(0, j);
      }
    }
  }

  return strs[0].slice(0, minLength);
}

// console.log(
//   longestCommonPrefix([
//     'flow',
//     'flower',
//     'prefix',
//     'google',
//     'flight',
//     'dream',
//   ]),
// );
