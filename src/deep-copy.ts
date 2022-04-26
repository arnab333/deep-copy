import { DeepCopy, DeepCopyObject, DeepCopyArray } from '../types';

function deepCopy<T extends DeepCopy>(original: T): T {
  let deepCopied: any = original;
  if (isArray(deepCopied)) {
    deepCopied = deepCopied.map((el: T) => {
      if (isObject(el)) {
        return deepCopyObject<T>(el);
      } else if (isArray(el)) {
        return deepCopyArray(el);
      }
      return el;
    });
  } else if (isObject(deepCopied)) {
    deepCopied = deepCopyObject(deepCopied);
  }
  return deepCopied;
}

function deepCopyObject<T extends DeepCopyObject>(obj: T): T {
  let clone: any = { ...obj };
  Object.keys(clone).forEach(
    key =>
      (clone[key] = isObject(clone[key])
        ? deepCopyObject(clone[key])
        : isArray(clone[key])
        ? deepCopyArray(clone[key])
        : clone[key])
  );
  return clone;
}

function deepCopyArray<T extends DeepCopyArray>(arr: T): T {
  const val: any = arr.map(item =>
    isArray(item)
      ? deepCopyArray(item)
      : isObject(item)
      ? deepCopyObject(item)
      : item
  );
  return val;
}

function isObject(data: DeepCopy): data is DeepCopyObject {
  return typeof data === 'object' && !isArray(data) && !(data instanceof Date);
}

function isArray(data: DeepCopy): data is DeepCopyArray {
  return Array.isArray(data);
}

export { deepCopy };

export default deepCopy;
