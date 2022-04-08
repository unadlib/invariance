// @ts-nocheck
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
