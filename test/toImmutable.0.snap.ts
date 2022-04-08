import { toImmutable } from '../src/toImmutable';

expect(toImmutable({ list: [{ text: 'foo' }] })).toBe(toImmutable({ list: [{ text: 'foo' }] }));
