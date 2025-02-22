export function bemResolve(block, element, modifier) {
  let result = block;
  if (element) {
    result += `__${element}`;
  }
  if (modifier) {
    result += `--${modifier}`;
  }
  return result;
}

export function bem(block) {
  return function (element, modifier) {
    return bemResolve(block, element, modifier);
  }
}
