const DataFetching = async () => {
  return (
    <div>
      <h1>Data Fetching In React And NextJS</h1>
      <section className="font-[300] text-sm ">
        <p className="text-blue-600 font-medium">
          There are four major ways you can fetch data
        </p>
        <div>
          <span>On the server with fetch</span>
          <span className="block">On the server with third party</span>
          <span>On the client via route handler </span>
          <span className="block">On the client with third parties</span>
        </div>
      </section>
      <section className="text-sm font-[300] py-2">
        <h2 className="text-lg text-blue-600 font-medium">
          Fetching Data on the Server with fetch
        </h2>
        <p>
          NextJs extends te native{" "}
          <code className="text-black font-black text-sm">fetch</code> API for
          caching and revalidation for request made on the server.
        </p>
        <p>
          React automatically memoize fetch requests while rendering a component
          tree
        </p>
        <div className="py-2">
          <b> Exceptions: fetched requests are not cached when:</b>
          <p>used in server actions</p>
          <p>used inside ROUTE handlers that uses the POST</p>
        </div>
      </section>
      <section className="text-sm font-[300]">
        <h2 className="font-medium text-blue-600">Revalidation</h2>

        <div>
          <p>
            This is the process of purging the data cache and re-fetching the
            latest data
          </p>
          <p>
            This is useful when you data changes and you want to ensure the
            latest changes
          </p>
        </div>

        <div>
          <h3>Types of revalidation</h3>
          <div>
            <p>
              Time based revalidation - this purges the data cache after a
              certain amount of time or a new request is made
            </p>
            <p>
              On-demand Revalidation - manually revalidate the data cache based
              on an event e.g a form submission
            </p>
          </div>
        </div>
      </section>
      <section className="font-[300] text-sm">
        <h1 className="text-lg text-blue-600 font-medium pt-2">
          Fetching data on the server with third party
        </h1>
        <p>
          When you are using a third party library that does not support or
          expose fetch (database, ORM client, CMS).
        </p>
        <p>
          You can configure the caching and revalidating behavior by using route
          segment options
        </p>
        <p>
          The way your routes are rendered will determine whether you request is
          cached or not.
        </p>
        <p>
          Statically rendered routes requests are cached and revalidated as part
          of the route segment.
        </p>
        <p>
          Dynamically rendered routes requests are not cached and will be
          re-fetched when the segment is rendered.
        </p>
      </section>
      <section className="font-[300] text-sm">
        <h1 className="text-lg text-blue-600 font-medium pt-2">
          Fetching data on the client with route handlers
        </h1>
        <p>
          Route handler execute on the server and returns data on the client.
        </p>
        <p>
          This is useful when you do not want to expose sensitive information
          like API keys, token etc to the client
        </p>
      </section>
      <section className="font-[300] text-sm">
        <h1 className="text-lg text-blue-600 font-medium pt-2">
          Fetching data on the client with third-party libraries
        </h1>
        <p>
          You can also fetch data on the client using a third-party library such
          as SWR or TanStack Query.
        </p>
        <p>
          These libraries provide their own APIs for memoizing requests,
          caching, revalidating, and mutating data.
        </p>
      </section>
    </div>
  );
};

export default DataFetching;
