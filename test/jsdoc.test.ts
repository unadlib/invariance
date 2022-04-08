// @ts-ignore
import { Record, Tuple } from "@bloomberg/record-tuple-polyfill";
import { jsdocTests } from 'jsdoc-tests';

globalThis.Tuple = Tuple;
globalThis.Record = Record;

test('test "toImmutable" function', () => {
  jsdocTests('../src/toImmutable.ts', __dirname, require);
});
