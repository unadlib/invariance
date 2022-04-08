[invariance](README.md) / Exports

# invariance

## Table of contents

### Functions

- [toImmutable](modules.md#toimmutable)

## Functions

### toImmutable

▸ **toImmutable**<`T`\>(`target`): `DeepReadonly`<`T`\>

Convert a object or array to immutable data structure.

**`example`**

```ts
import { toImmutable } from '../src/toImmutable';

expect(toImmutable({ list: [{ text: 'foo' }] })).toBe(toImmutable({ list: [{ text: 'foo' }] }));
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] \| `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

`DeepReadonly`<`T`\>

#### Defined in

[toImmutable.ts:63](https://github.com/unadlib/invariance/blob/fa64b28/src/toImmutable.ts#L63)
