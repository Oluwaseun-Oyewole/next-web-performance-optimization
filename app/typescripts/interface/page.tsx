const interfaceVsTypes = () => {
  return (
    <div>
      <h1 className="text-2xl text-blue-500 font-bold">Interface Vs Types</h1>
      <h2 className="py-1 text-xl underline">Interface</h2>
      <section className="font-[300] text-sm">
        <p>
          In Typescript both interface and types are used to describe the shape
          of an object but they have some key differences and specific use cases
        </p>
        <div className="py-2">
          <p className="text-blue-600 font-medium">
            Interface Declaration Merging. Typescript will automatically merge
            multiple interface of the same name into one.
          </p>
          <code className="font-bold">interface User {`{name:string}`}</code>
          <br />
          <code className="font-bold">interface User {`{id:number}`}</code>
          <p>With interface declaration merging we can have this </p>
          <code className="font-bold">
            interface User {`{name:string, id:number}`}
          </code>
        </div>
      </section>
      <section className="font-[300] text-sm">
        <div className="py-2">
          <p className="text-blue-600 font-medium">
            Typescript can extend other interfaces.
          </p>
          <code className="font-bold">interface User {`{name:string}`}</code>
          <br />
          <code className="font-bold">
            interface Person {`extends User {id:number}`}
          </code>
          <br />
          <code className="font-bold">
            const user:Person {`{name:Sam, id:1}`}
          </code>
        </div>
      </section>
      <h2 className="underline py-1 text-xl">Type</h2>
      <section className="text-sm">
        <p className="text-blue-600">
          Aliases can describe any type be it primitives types, union,
          intersection types, tuple types etc
        </p>
        <div className="font-bold">
          <code>type User = {`{name:string, id:string}`}</code>
          <br />
          <code>type Person = User & {`{status:string}`}</code>
        </div>
      </section>
      <section className="text-sm py-3">
        <p className="text-blue-600">Union and Interception Types</p>
        <div className="font-bold">
          <code>type SuccessResponse = {`{success:boolean, data:[]}`}</code>
          <br />
          <code>
            type ErrorResponse = User & {`{error:boolean, data:null}`}
          </code>
          <br />
          <code>type APIResponse = SuccessResponse | ErrorResponse</code>
        </div>
      </section>
      <section className="font-[300] text-sm py-4">
        <h3 className="font-bold">Quick Note</h3>
        <p>
          Both interface and type can often be used interchangeably for defining
          object shapes,
        </p>
        <p>but type provides more flexibility for defining complex types,</p>
        <p>
          while interface offers better support for object-oriented patterns and
          declaration merging.
        </p>
      </section>
    </div>
  );
};

export default interfaceVsTypes;
