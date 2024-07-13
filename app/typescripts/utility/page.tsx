const UtilityTypes = () => {
  return (
    <div>
      <h1 className="pb-2">Common Utility Types in Typescript</h1>
      <section>
        <h1>{`Partial<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Partial utility makes all fields optional
          </p>
          <div>
            <code>Interface User {`{name:string, id:number}`}</code>
            <br />
            <code>
              const updateUserProfile{" "}
              {`(user:Partial<User>) => {
              return  { id: user.name }
            }`}
            </code>
          </div>
        </div>
      </section>

      <section className="py-2">
        <h1>{`Required<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Required utility makes all fields required
          </p>
          <div>
            <code>Interface User {`{name:string, id:number}`}</code>
            <br />
            <code>const user : {`Required<User> = {name:Sam, id:1}`}</code>
          </div>
        </div>
      </section>

      <section>
        <h1>{`Readonly<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Readonly utility makes all properties of a type read-only
          </p>
          <div>
            <code>Interface User {`{name:string, id:number}`}</code>
            <br />
            <code>const user : {`Readonly<User> = {name:Sam, id:1}`}</code>
          </div>
        </div>
      </section>

      <section className="py-2">
        <h1>{`Record<T, P>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Record utility type constructs a type with a set of properties K of
            type T
          </p>
          <div>
            <code>type Roles {`admin | manager`}</code>
            <br />
            <code>
              const user :{" "}
              {`Record<Roles, string> = {admin:Administrative duties, manager:Managerial duties}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h1>{`Pick<T, K>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Readonly utility type constructs a type by picking a set of
            properties K from type T
          </p>
          <div>
            <code>Interface User {`{name:string, id:number}`}</code>
            <br />
            <code>type UserIdName ={`Pick<User, "id"|"name">`}</code>
            <br />
            <code>const user : {`UserIdName = {name:Sam, id:1}`}</code>
          </div>
        </div>
      </section>

      <section className="py-2">
        <h1>{`Omit<T, K>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Readonly utility type constructs a type by picking a set of
            properties K from type T
          </p>
          <div>
            <code>Interface User {`{name:string, id:number}`}</code>
            <br />
            <code>type UserId ={`Omit<User, "name">`}</code>
            <br />
            <code>const user : {`UserIdName = {id:1}`}</code>
          </div>
        </div>
      </section>
      <section>
        <h1>{`Exclude<T, K>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Exclude utility type constructs a type by excluding from type T all
            properties that are assignable to type K
          </p>
          <div>
            <code>Interface ROLES {`"admin" | "Manager"`}</code>
            <br />
            <code>type UserRoles ={`Exclude<User, "admin">`}</code>
            <br />
            <code>const user : {`UserIdName = {admin:"Admin duties"}`}</code>
          </div>
        </div>
      </section>
      <section className="py-2">
        <h1>{`NonNullable<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            NonNullable utility type constructs a type by excluding null and
            undefined from type T.
          </p>
          <div>
            <code>type User {`{id:number, name:string | null}`}</code>
            <br />
            <code>type NonNullableUser ={`NonNullable<User["name"]>`}</code>
          </div>
        </div>
      </section>
      <section>
        <h1>{`ReturnType<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Return utility type constructs a type consisting of the return type
            of function T.
          </p>
          <div>
            <code>type ReturnTypeUser ={`ReturnType<typeof ....>`}</code>
          </div>
        </div>
      </section>

      <section className="py-2">
        <h1>{`Parameters<T>`}</h1>
        <div className="font-[300] text-sm">
          <p className="text-blue-600 font-medium">
            Parameters utility type constructs a tuple type consisting of the
            parameter types of a function type T.
          </p>
          <div>
            <code>type User ={`Parameter<typeof ....>`}</code>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilityTypes;
