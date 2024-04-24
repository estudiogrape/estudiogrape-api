
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contato
 * 
 */
export type Contato = $Result.DefaultSelection<Prisma.$ContatoPayload>
/**
 * Model GoodSun_Email
 * 
 */
export type GoodSun_Email = $Result.DefaultSelection<Prisma.$GoodSun_EmailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contatoes
 * const contatoes = await prisma.contato.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contatoes
   * const contatoes = await prisma.contato.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.contato`: Exposes CRUD operations for the **Contato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatoes
    * const contatoes = await prisma.contato.findMany()
    * ```
    */
  get contato(): Prisma.ContatoDelegate<ExtArgs>;

  /**
   * `prisma.goodSun_Email`: Exposes CRUD operations for the **GoodSun_Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoodSun_Emails
    * const goodSun_Emails = await prisma.goodSun_Email.findMany()
    * ```
    */
  get goodSun_Email(): Prisma.GoodSun_EmailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contato: 'Contato',
    GoodSun_Email: 'GoodSun_Email'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'contato' | 'goodSun_Email'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Contato: {
        payload: Prisma.$ContatoPayload<ExtArgs>
        fields: Prisma.ContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findFirst: {
            args: Prisma.ContatoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findMany: {
            args: Prisma.ContatoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          create: {
            args: Prisma.ContatoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          createMany: {
            args: Prisma.ContatoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContatoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          update: {
            args: Prisma.ContatoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          deleteMany: {
            args: Prisma.ContatoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContatoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          aggregate: {
            args: Prisma.ContatoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContato>
          }
          groupBy: {
            args: Prisma.ContatoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContatoCountArgs<ExtArgs>,
            result: $Utils.Optional<ContatoCountAggregateOutputType> | number
          }
        }
      }
      GoodSun_Email: {
        payload: Prisma.$GoodSun_EmailPayload<ExtArgs>
        fields: Prisma.GoodSun_EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoodSun_EmailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoodSun_EmailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          findFirst: {
            args: Prisma.GoodSun_EmailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoodSun_EmailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          findMany: {
            args: Prisma.GoodSun_EmailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>[]
          }
          create: {
            args: Prisma.GoodSun_EmailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          createMany: {
            args: Prisma.GoodSun_EmailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GoodSun_EmailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          update: {
            args: Prisma.GoodSun_EmailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          deleteMany: {
            args: Prisma.GoodSun_EmailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoodSun_EmailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoodSun_EmailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodSun_EmailPayload>
          }
          aggregate: {
            args: Prisma.GoodSun_EmailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoodSun_Email>
          }
          groupBy: {
            args: Prisma.GoodSun_EmailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoodSun_EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoodSun_EmailCountArgs<ExtArgs>,
            result: $Utils.Optional<GoodSun_EmailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Contato
   */

  export type AggregateContato = {
    _count: ContatoCountAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  export type ContatoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
  }

  export type ContatoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
  }

  export type ContatoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    phone: number
    created_at: number
    _all: number
  }


  export type ContatoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    phone?: true
    created_at?: true
  }

  export type ContatoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    phone?: true
    created_at?: true
  }

  export type ContatoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type ContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contato to aggregate.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contatoes
    **/
    _count?: true | ContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoMaxAggregateInputType
  }

  export type GetContatoAggregateType<T extends ContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContato[P]>
      : GetScalarType<T[P], AggregateContato[P]>
  }




  export type ContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithAggregationInput | ContatoOrderByWithAggregationInput[]
    by: ContatoScalarFieldEnum[] | ContatoScalarFieldEnum
    having?: ContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoCountAggregateInputType | true
    _min?: ContatoMinAggregateInputType
    _max?: ContatoMaxAggregateInputType
  }

  export type ContatoGroupByOutputType = {
    id: string
    nome: string
    email: string
    phone: string
    created_at: Date
    _count: ContatoCountAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  type GetContatoGroupByPayload<T extends ContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoGroupByOutputType[P]>
        }
      >
    >


  export type ContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
  }


  export type $ContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contato"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      phone: string
      created_at: Date
    }, ExtArgs["result"]["contato"]>
    composites: {}
  }


  type ContatoGetPayload<S extends boolean | null | undefined | ContatoDefaultArgs> = $Result.GetResult<Prisma.$ContatoPayload, S>

  type ContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContatoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContatoCountAggregateInputType | true
    }

  export interface ContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contato'], meta: { name: 'Contato' } }
    /**
     * Find zero or one Contato that matches the filter.
     * @param {ContatoFindUniqueArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContatoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoFindUniqueArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contato that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContatoFindUniqueOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContatoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContatoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoFindFirstArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContatoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatoes
     * const contatoes = await prisma.contato.findMany()
     * 
     * // Get first 10 Contatoes
     * const contatoes = await prisma.contato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatoWithIdOnly = await prisma.contato.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContatoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contato.
     * @param {ContatoCreateArgs} args - Arguments to create a Contato.
     * @example
     * // Create one Contato
     * const Contato = await prisma.contato.create({
     *   data: {
     *     // ... data to create a Contato
     *   }
     * })
     * 
    **/
    create<T extends ContatoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoCreateArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contatoes.
     *     @param {ContatoCreateManyArgs} args - Arguments to create many Contatoes.
     *     @example
     *     // Create many Contatoes
     *     const contato = await prisma.contato.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContatoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contato.
     * @param {ContatoDeleteArgs} args - Arguments to delete one Contato.
     * @example
     * // Delete one Contato
     * const Contato = await prisma.contato.delete({
     *   where: {
     *     // ... filter to delete one Contato
     *   }
     * })
     * 
    **/
    delete<T extends ContatoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoDeleteArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contato.
     * @param {ContatoUpdateArgs} args - Arguments to update one Contato.
     * @example
     * // Update one Contato
     * const contato = await prisma.contato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContatoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoUpdateArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contatoes.
     * @param {ContatoDeleteManyArgs} args - Arguments to filter Contatoes to delete.
     * @example
     * // Delete a few Contatoes
     * const { count } = await prisma.contato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContatoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContatoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContatoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contato.
     * @param {ContatoUpsertArgs} args - Arguments to update or create a Contato.
     * @example
     * // Update or create a Contato
     * const contato = await prisma.contato.upsert({
     *   create: {
     *     // ... data to create a Contato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contato we want to update
     *   }
     * })
    **/
    upsert<T extends ContatoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContatoUpsertArgs<ExtArgs>>
    ): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoCountArgs} args - Arguments to filter Contatoes to count.
     * @example
     * // Count the number of Contatoes
     * const count = await prisma.contato.count({
     *   where: {
     *     // ... the filter for the Contatoes we want to count
     *   }
     * })
    **/
    count<T extends ContatoCountArgs>(
      args?: Subset<T, ContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContatoAggregateArgs>(args: Subset<T, ContatoAggregateArgs>): Prisma.PrismaPromise<GetContatoAggregateType<T>>

    /**
     * Group by Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoGroupByArgs['orderBy'] }
        : { orderBy?: ContatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contato model
   */
  readonly fields: ContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contato model
   */ 
  interface ContatoFieldRefs {
    readonly id: FieldRef<"Contato", 'String'>
    readonly nome: FieldRef<"Contato", 'String'>
    readonly email: FieldRef<"Contato", 'String'>
    readonly phone: FieldRef<"Contato", 'String'>
    readonly created_at: FieldRef<"Contato", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Contato findUnique
   */
  export type ContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }


  /**
   * Contato findUniqueOrThrow
   */
  export type ContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }


  /**
   * Contato findFirst
   */
  export type ContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }


  /**
   * Contato findFirstOrThrow
   */
  export type ContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }


  /**
   * Contato findMany
   */
  export type ContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter, which Contatoes to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }


  /**
   * Contato create
   */
  export type ContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * The data needed to create a Contato.
     */
    data: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
  }


  /**
   * Contato createMany
   */
  export type ContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contato update
   */
  export type ContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * The data needed to update a Contato.
     */
    data: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
    /**
     * Choose, which Contato to update.
     */
    where: ContatoWhereUniqueInput
  }


  /**
   * Contato updateMany
   */
  export type ContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
  }


  /**
   * Contato upsert
   */
  export type ContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * The filter to search for the Contato to update in case it exists.
     */
    where: ContatoWhereUniqueInput
    /**
     * In case the Contato found by the `where` argument doesn't exist, create a new Contato with this data.
     */
    create: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
    /**
     * In case the Contato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
  }


  /**
   * Contato delete
   */
  export type ContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Filter which Contato to delete.
     */
    where: ContatoWhereUniqueInput
  }


  /**
   * Contato deleteMany
   */
  export type ContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contatoes to delete
     */
    where?: ContatoWhereInput
  }


  /**
   * Contato without action
   */
  export type ContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
  }



  /**
   * Model GoodSun_Email
   */

  export type AggregateGoodSun_Email = {
    _count: GoodSun_EmailCountAggregateOutputType | null
    _min: GoodSun_EmailMinAggregateOutputType | null
    _max: GoodSun_EmailMaxAggregateOutputType | null
  }

  export type GoodSun_EmailMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type GoodSun_EmailMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type GoodSun_EmailCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    _all: number
  }


  export type GoodSun_EmailMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type GoodSun_EmailMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type GoodSun_EmailCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type GoodSun_EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodSun_Email to aggregate.
     */
    where?: GoodSun_EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodSun_Emails to fetch.
     */
    orderBy?: GoodSun_EmailOrderByWithRelationInput | GoodSun_EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoodSun_EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodSun_Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodSun_Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoodSun_Emails
    **/
    _count?: true | GoodSun_EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodSun_EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodSun_EmailMaxAggregateInputType
  }

  export type GetGoodSun_EmailAggregateType<T extends GoodSun_EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateGoodSun_Email]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoodSun_Email[P]>
      : GetScalarType<T[P], AggregateGoodSun_Email[P]>
  }




  export type GoodSun_EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodSun_EmailWhereInput
    orderBy?: GoodSun_EmailOrderByWithAggregationInput | GoodSun_EmailOrderByWithAggregationInput[]
    by: GoodSun_EmailScalarFieldEnum[] | GoodSun_EmailScalarFieldEnum
    having?: GoodSun_EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodSun_EmailCountAggregateInputType | true
    _min?: GoodSun_EmailMinAggregateInputType
    _max?: GoodSun_EmailMaxAggregateInputType
  }

  export type GoodSun_EmailGroupByOutputType = {
    id: string
    email: string
    created_at: Date
    _count: GoodSun_EmailCountAggregateOutputType | null
    _min: GoodSun_EmailMinAggregateOutputType | null
    _max: GoodSun_EmailMaxAggregateOutputType | null
  }

  type GetGoodSun_EmailGroupByPayload<T extends GoodSun_EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodSun_EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodSun_EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodSun_EmailGroupByOutputType[P]>
            : GetScalarType<T[P], GoodSun_EmailGroupByOutputType[P]>
        }
      >
    >


  export type GoodSun_EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["goodSun_Email"]>

  export type GoodSun_EmailSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
  }


  export type $GoodSun_EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoodSun_Email"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date
    }, ExtArgs["result"]["goodSun_Email"]>
    composites: {}
  }


  type GoodSun_EmailGetPayload<S extends boolean | null | undefined | GoodSun_EmailDefaultArgs> = $Result.GetResult<Prisma.$GoodSun_EmailPayload, S>

  type GoodSun_EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoodSun_EmailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoodSun_EmailCountAggregateInputType | true
    }

  export interface GoodSun_EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoodSun_Email'], meta: { name: 'GoodSun_Email' } }
    /**
     * Find zero or one GoodSun_Email that matches the filter.
     * @param {GoodSun_EmailFindUniqueArgs} args - Arguments to find a GoodSun_Email
     * @example
     * // Get one GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoodSun_EmailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailFindUniqueArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GoodSun_Email that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GoodSun_EmailFindUniqueOrThrowArgs} args - Arguments to find a GoodSun_Email
     * @example
     * // Get one GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoodSun_EmailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GoodSun_Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailFindFirstArgs} args - Arguments to find a GoodSun_Email
     * @example
     * // Get one GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoodSun_EmailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailFindFirstArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GoodSun_Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailFindFirstOrThrowArgs} args - Arguments to find a GoodSun_Email
     * @example
     * // Get one GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoodSun_EmailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GoodSun_Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoodSun_Emails
     * const goodSun_Emails = await prisma.goodSun_Email.findMany()
     * 
     * // Get first 10 GoodSun_Emails
     * const goodSun_Emails = await prisma.goodSun_Email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodSun_EmailWithIdOnly = await prisma.goodSun_Email.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoodSun_EmailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GoodSun_Email.
     * @param {GoodSun_EmailCreateArgs} args - Arguments to create a GoodSun_Email.
     * @example
     * // Create one GoodSun_Email
     * const GoodSun_Email = await prisma.goodSun_Email.create({
     *   data: {
     *     // ... data to create a GoodSun_Email
     *   }
     * })
     * 
    **/
    create<T extends GoodSun_EmailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailCreateArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GoodSun_Emails.
     *     @param {GoodSun_EmailCreateManyArgs} args - Arguments to create many GoodSun_Emails.
     *     @example
     *     // Create many GoodSun_Emails
     *     const goodSun_Email = await prisma.goodSun_Email.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GoodSun_EmailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GoodSun_Email.
     * @param {GoodSun_EmailDeleteArgs} args - Arguments to delete one GoodSun_Email.
     * @example
     * // Delete one GoodSun_Email
     * const GoodSun_Email = await prisma.goodSun_Email.delete({
     *   where: {
     *     // ... filter to delete one GoodSun_Email
     *   }
     * })
     * 
    **/
    delete<T extends GoodSun_EmailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailDeleteArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GoodSun_Email.
     * @param {GoodSun_EmailUpdateArgs} args - Arguments to update one GoodSun_Email.
     * @example
     * // Update one GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoodSun_EmailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailUpdateArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GoodSun_Emails.
     * @param {GoodSun_EmailDeleteManyArgs} args - Arguments to filter GoodSun_Emails to delete.
     * @example
     * // Delete a few GoodSun_Emails
     * const { count } = await prisma.goodSun_Email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoodSun_EmailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodSun_EmailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodSun_Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoodSun_Emails
     * const goodSun_Email = await prisma.goodSun_Email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoodSun_EmailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoodSun_Email.
     * @param {GoodSun_EmailUpsertArgs} args - Arguments to update or create a GoodSun_Email.
     * @example
     * // Update or create a GoodSun_Email
     * const goodSun_Email = await prisma.goodSun_Email.upsert({
     *   create: {
     *     // ... data to create a GoodSun_Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoodSun_Email we want to update
     *   }
     * })
    **/
    upsert<T extends GoodSun_EmailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoodSun_EmailUpsertArgs<ExtArgs>>
    ): Prisma__GoodSun_EmailClient<$Result.GetResult<Prisma.$GoodSun_EmailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GoodSun_Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailCountArgs} args - Arguments to filter GoodSun_Emails to count.
     * @example
     * // Count the number of GoodSun_Emails
     * const count = await prisma.goodSun_Email.count({
     *   where: {
     *     // ... the filter for the GoodSun_Emails we want to count
     *   }
     * })
    **/
    count<T extends GoodSun_EmailCountArgs>(
      args?: Subset<T, GoodSun_EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodSun_EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoodSun_Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoodSun_EmailAggregateArgs>(args: Subset<T, GoodSun_EmailAggregateArgs>): Prisma.PrismaPromise<GetGoodSun_EmailAggregateType<T>>

    /**
     * Group by GoodSun_Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodSun_EmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoodSun_EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoodSun_EmailGroupByArgs['orderBy'] }
        : { orderBy?: GoodSun_EmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoodSun_EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodSun_EmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoodSun_Email model
   */
  readonly fields: GoodSun_EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoodSun_Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoodSun_EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GoodSun_Email model
   */ 
  interface GoodSun_EmailFieldRefs {
    readonly id: FieldRef<"GoodSun_Email", 'String'>
    readonly email: FieldRef<"GoodSun_Email", 'String'>
    readonly created_at: FieldRef<"GoodSun_Email", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GoodSun_Email findUnique
   */
  export type GoodSun_EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter, which GoodSun_Email to fetch.
     */
    where: GoodSun_EmailWhereUniqueInput
  }


  /**
   * GoodSun_Email findUniqueOrThrow
   */
  export type GoodSun_EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter, which GoodSun_Email to fetch.
     */
    where: GoodSun_EmailWhereUniqueInput
  }


  /**
   * GoodSun_Email findFirst
   */
  export type GoodSun_EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter, which GoodSun_Email to fetch.
     */
    where?: GoodSun_EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodSun_Emails to fetch.
     */
    orderBy?: GoodSun_EmailOrderByWithRelationInput | GoodSun_EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodSun_Emails.
     */
    cursor?: GoodSun_EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodSun_Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodSun_Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodSun_Emails.
     */
    distinct?: GoodSun_EmailScalarFieldEnum | GoodSun_EmailScalarFieldEnum[]
  }


  /**
   * GoodSun_Email findFirstOrThrow
   */
  export type GoodSun_EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter, which GoodSun_Email to fetch.
     */
    where?: GoodSun_EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodSun_Emails to fetch.
     */
    orderBy?: GoodSun_EmailOrderByWithRelationInput | GoodSun_EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodSun_Emails.
     */
    cursor?: GoodSun_EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodSun_Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodSun_Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodSun_Emails.
     */
    distinct?: GoodSun_EmailScalarFieldEnum | GoodSun_EmailScalarFieldEnum[]
  }


  /**
   * GoodSun_Email findMany
   */
  export type GoodSun_EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter, which GoodSun_Emails to fetch.
     */
    where?: GoodSun_EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodSun_Emails to fetch.
     */
    orderBy?: GoodSun_EmailOrderByWithRelationInput | GoodSun_EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoodSun_Emails.
     */
    cursor?: GoodSun_EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodSun_Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodSun_Emails.
     */
    skip?: number
    distinct?: GoodSun_EmailScalarFieldEnum | GoodSun_EmailScalarFieldEnum[]
  }


  /**
   * GoodSun_Email create
   */
  export type GoodSun_EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * The data needed to create a GoodSun_Email.
     */
    data: XOR<GoodSun_EmailCreateInput, GoodSun_EmailUncheckedCreateInput>
  }


  /**
   * GoodSun_Email createMany
   */
  export type GoodSun_EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoodSun_Emails.
     */
    data: GoodSun_EmailCreateManyInput | GoodSun_EmailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GoodSun_Email update
   */
  export type GoodSun_EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * The data needed to update a GoodSun_Email.
     */
    data: XOR<GoodSun_EmailUpdateInput, GoodSun_EmailUncheckedUpdateInput>
    /**
     * Choose, which GoodSun_Email to update.
     */
    where: GoodSun_EmailWhereUniqueInput
  }


  /**
   * GoodSun_Email updateMany
   */
  export type GoodSun_EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoodSun_Emails.
     */
    data: XOR<GoodSun_EmailUpdateManyMutationInput, GoodSun_EmailUncheckedUpdateManyInput>
    /**
     * Filter which GoodSun_Emails to update
     */
    where?: GoodSun_EmailWhereInput
  }


  /**
   * GoodSun_Email upsert
   */
  export type GoodSun_EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * The filter to search for the GoodSun_Email to update in case it exists.
     */
    where: GoodSun_EmailWhereUniqueInput
    /**
     * In case the GoodSun_Email found by the `where` argument doesn't exist, create a new GoodSun_Email with this data.
     */
    create: XOR<GoodSun_EmailCreateInput, GoodSun_EmailUncheckedCreateInput>
    /**
     * In case the GoodSun_Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoodSun_EmailUpdateInput, GoodSun_EmailUncheckedUpdateInput>
  }


  /**
   * GoodSun_Email delete
   */
  export type GoodSun_EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
    /**
     * Filter which GoodSun_Email to delete.
     */
    where: GoodSun_EmailWhereUniqueInput
  }


  /**
   * GoodSun_Email deleteMany
   */
  export type GoodSun_EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodSun_Emails to delete
     */
    where?: GoodSun_EmailWhereInput
  }


  /**
   * GoodSun_Email without action
   */
  export type GoodSun_EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodSun_Email
     */
    select?: GoodSun_EmailSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContatoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type ContatoScalarFieldEnum = (typeof ContatoScalarFieldEnum)[keyof typeof ContatoScalarFieldEnum]


  export const GoodSun_EmailScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at'
  };

  export type GoodSun_EmailScalarFieldEnum = (typeof GoodSun_EmailScalarFieldEnum)[keyof typeof GoodSun_EmailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ContatoWhereInput = {
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    id?: StringFilter<"Contato"> | string
    nome?: StringFilter<"Contato"> | string
    email?: StringFilter<"Contato"> | string
    phone?: StringFilter<"Contato"> | string
    created_at?: DateTimeFilter<"Contato"> | Date | string
  }

  export type ContatoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type ContatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    nome?: StringFilter<"Contato"> | string
    email?: StringFilter<"Contato"> | string
    phone?: StringFilter<"Contato"> | string
    created_at?: DateTimeFilter<"Contato"> | Date | string
  }, "id">

  export type ContatoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    _count?: ContatoCountOrderByAggregateInput
    _max?: ContatoMaxOrderByAggregateInput
    _min?: ContatoMinOrderByAggregateInput
  }

  export type ContatoScalarWhereWithAggregatesInput = {
    AND?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    OR?: ContatoScalarWhereWithAggregatesInput[]
    NOT?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contato"> | string
    nome?: StringWithAggregatesFilter<"Contato"> | string
    email?: StringWithAggregatesFilter<"Contato"> | string
    phone?: StringWithAggregatesFilter<"Contato"> | string
    created_at?: DateTimeWithAggregatesFilter<"Contato"> | Date | string
  }

  export type GoodSun_EmailWhereInput = {
    AND?: GoodSun_EmailWhereInput | GoodSun_EmailWhereInput[]
    OR?: GoodSun_EmailWhereInput[]
    NOT?: GoodSun_EmailWhereInput | GoodSun_EmailWhereInput[]
    id?: StringFilter<"GoodSun_Email"> | string
    email?: StringFilter<"GoodSun_Email"> | string
    created_at?: DateTimeFilter<"GoodSun_Email"> | Date | string
  }

  export type GoodSun_EmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type GoodSun_EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoodSun_EmailWhereInput | GoodSun_EmailWhereInput[]
    OR?: GoodSun_EmailWhereInput[]
    NOT?: GoodSun_EmailWhereInput | GoodSun_EmailWhereInput[]
    email?: StringFilter<"GoodSun_Email"> | string
    created_at?: DateTimeFilter<"GoodSun_Email"> | Date | string
  }, "id">

  export type GoodSun_EmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    _count?: GoodSun_EmailCountOrderByAggregateInput
    _max?: GoodSun_EmailMaxOrderByAggregateInput
    _min?: GoodSun_EmailMinOrderByAggregateInput
  }

  export type GoodSun_EmailScalarWhereWithAggregatesInput = {
    AND?: GoodSun_EmailScalarWhereWithAggregatesInput | GoodSun_EmailScalarWhereWithAggregatesInput[]
    OR?: GoodSun_EmailScalarWhereWithAggregatesInput[]
    NOT?: GoodSun_EmailScalarWhereWithAggregatesInput | GoodSun_EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoodSun_Email"> | string
    email?: StringWithAggregatesFilter<"GoodSun_Email"> | string
    created_at?: DateTimeWithAggregatesFilter<"GoodSun_Email"> | Date | string
  }

  export type ContatoCreateInput = {
    id?: string
    nome: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type ContatoUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type ContatoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoCreateManyInput = {
    id?: string
    nome: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type ContatoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodSun_EmailCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type GoodSun_EmailUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type GoodSun_EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodSun_EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodSun_EmailCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type GoodSun_EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodSun_EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContatoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type ContatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type ContatoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GoodSun_EmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type GoodSun_EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type GoodSun_EmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ContatoDefaultArgs instead
     */
    export type ContatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContatoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoodSun_EmailDefaultArgs instead
     */
    export type GoodSun_EmailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoodSun_EmailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}