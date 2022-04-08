import { DeepReadonly } from './interface';

const convertToImmutable = <T extends Record<string, any> | any[]>(
  target: T,
  refs = new WeakSet()
): DeepReadonly<T> => {
  const type = typeof target;
  if (
    type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    type === 'undefined' ||
    type === 'bigint' ||
    target === null ||
    target instanceof Record ||
    target instanceof Tuple
  ) {
    return target as DeepReadonly<any>;
  }

  if (refs.has(target)) {
    throw new TypeError(
      `Can't convert circular object structure to immutable structure`
    );
  }

  if (Array.isArray(target)) {
    refs.add(target);
    return Tuple.from(
      target.map((item) => convertToImmutable(item, refs))
    ) as DeepReadonly<any>;
  } else if (
    typeof target === 'object' &&
    Object.getPrototypeOf(target) === Object.prototype
  ) {
    refs.add(target);
    return Record.fromEntries(
      Object.keys(target).map((key) => [
        key,
        convertToImmutable(target[key], refs),
      ])
    ) as DeepReadonly<any>;
  } else {
    throw new TypeError(
      `Can't convert an unexpected type data ${target} to immutable structure, only support regular objects and arrays.`
    );
  }
};

/**
 * Convert a object or array to immutable data structure.
 *
 * @param target {object|array}
 *
 * @example
 *
 * ```ts
 * import { toImmutable } from '../src/toImmutable';
 *
 * expect(toImmutable({ list: [{ text: 'foo' }] })).toBe(toImmutable({ list: [{ text: 'foo' }] }));
 * ```
 */
export const toImmutable = <T extends Record<string, any> | any[]>(target: T) => {
  return convertToImmutable(target);
};
