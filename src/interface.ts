declare global {
  // TODO: add Record type
  var Record: RecordConstructor;
  interface RecordConstructor {
    new (value: Record<string, any>): Readonly<Record<string, any>>;
    fromEntries<T = any>(
      entries: Iterable<readonly [PropertyKey, T]>
    ): Readonly<{ [k: string]: T }>;
  }
  // TODO: add Tuple type
  var Tuple: TupleConstructor;
  interface TupleConstructor {
    new (value?: any): ReadonlyArray<any>;
    from(value: any[]): ReadonlyArray<any>;
  }
}

type Primitive = string | number | bigint | boolean | symbol | null | undefined;

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends DeepReadonlyArray<infer U>
  ? DeepReadonlyArray<U>
  : T extends DeepReadonlyObject<infer V>
  ? DeepReadonlyObject<V>
  : T;
