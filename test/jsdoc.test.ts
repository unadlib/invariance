// @ts-nocheck
import { jsdocTests } from 'jsdoc-tests';
import { Record, Tuple } from "@bloomberg/record-tuple-polyfill";

globalThis.Tuple = Tuple;
globalThis.Record = Record;

test('test "toImmutable" function', () => {
  jsdocTests('../src/toImmutable.ts', __dirname, require);
});
