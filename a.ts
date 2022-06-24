


type Abc<N, T extends any[] = []> = T['length'] extends N
    ? T
    : Abc<N, [...T, any]>;
type Sub<T extends number, N extends number> = Abc<T> extends [
        ...Abc<N>,
        ...infer Rest,
    ]
    ? Rest['length']
    : never;
// type CaseToNumberArray<T extends any[]> = T extends number[] ? T : never;
type Tail<N extends number[]> = N extends [infer T, ...infer Rest] ? Rest : never;
type ToUnion<T extends any[]> = T[number];

type TwoSum<T extends number[], K extends number> = T['length'] extends 0
    ? false
    : Sub<K, T[0]> extends ToUnion<Tail<T>>
        ? true
        //Type 'Tail<T>' does not satisfy the constraint 'number[]'.
        //Type 'unknown[]' is not assignable to type 'number[]'.
        //Type 'unknown' is not assignable to type 'number'.(2344)
        : TwoSum<Tail<T>, K>;

type Cases = [
    TwoSum<[1, 2, 3], 4>,
    TwoSum<[1, 2, 3], 5>,
    TwoSum<[1, 2, 3], 6>,
    TwoSum<[1], 7>,
    TwoSum<[2, 2], 4>,
    TwoSum<[4], 4>,
    TwoSum<[], 4>,
];


