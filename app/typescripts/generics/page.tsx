const TypescriptGenerics = () => {
  return (
    <div>
      <h1 className="pb-2 text-2xl text-blue-500 font-bold">
        Typescript Generics
      </h1>
      <p className="font-[300] text-sm">
        TG allows us to create reusable functions that can work with a variety
        of types while also maintaining full type safety
      </p>
      <section>
        <h2>Generic Functions</h2>
        <code className="text-sm">
          function identity{`<T>(value:T):T{return value}`}
        </code>
      </section>

      <section className="py-2">
        <h2>Generic Interfaces</h2>
        <code className="text-sm">
          interface KeyPairs{`<T, P>{key:T, value:P}`}
        </code>
        <br />
        <code className="text-sm">
          const numberPair: KeyValuePair
          {`<number, string> = { key: 1, value: "one" }`}
        </code>
      </section>
      <section className="text-sm">
        <h2 className="text-lg pb-2">Other generics use cases</h2>
        <code>
          function mapPair
          {`<K, V>(key: K, value: V): [K, V] {
  return [key, value];`}
        </code>
        <br />
        <code>
          function createArray
          {`<T = string>(length: number, value: T): T[] {
  return new Array(length).fill(value);`}
        </code>
      </section>
    </div>
  );
};

export default TypescriptGenerics;
