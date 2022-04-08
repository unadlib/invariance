// @ts-ignore
import { Record, Tuple } from '@bloomberg/record-tuple-polyfill';
import { toImmutable } from '../src';

globalThis.Tuple = Tuple;
globalThis.Record = Record;

test('base convert', () => {
  expect(toImmutable({ foo: 'bar' })).toBe(toImmutable({ foo: 'bar' }));
  expect(toImmutable({ foo: 'bar', arr: toImmutable([1, 2, 3]) })).toBe(
    toImmutable({ foo: 'bar', arr: toImmutable([1, 2, 3]) })
  );
});

test('check immutable', () => {
  const value = toImmutable({ foo: 'bar', list: [1, 2, 3] });
  expect(() => {
    // @ts-ignore
    value.foo = 'baz';
  }).toThrowError();
  expect(() => {
    // @ts-ignore
    value.foo1 = 'baz1';
  }).toThrowError();
  expect(() => {
    // @ts-ignore
    value.list.push(4);
  }).toThrowError();
});
