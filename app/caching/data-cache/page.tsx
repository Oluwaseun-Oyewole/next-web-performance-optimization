const DataCache = () => {
  return (
    <div>
      <h1 className="text-2xl text-blue-500 font-bold">Data Cache</h1>
      <section className="font-[300]">
        <p>
          Next Js has a data cache that stores the results of your data fetches
          across incoming servers and deployments
        </p>
        <p>
          This is possible because Next.js extends the native fetch API to allow
          each request on the server to set its own persistent caching
          semantics.
        </p>
        <br />
        <p>
          Data requests that uses fetch are cached by default. You can user now
          use the cache and next revalidate option of next to configure the
          caching behavior
        </p>
        <br />
        <div>
          <ul className="font-[300]">
            <li>
              The first time a fetch request is called during rendering, Next.js
              checks the Data Cache for a cached response.
            </li>
            <li>
              If a cached response is found, it is returned immediately and
              memoized.
            </li>
            <li>
              If a cached response is not found, the request is made to the data
              source, the result is stored in the Data Cache, and memoized.
            </li>
            <li>
              For uncached data <b>{`e.g. {cache: "no store"} `}</b> the result
              is always fetched from the data source, and memoized.
            </li>
            <li>
              Whether the data is cached or uncached, the requests are always
              memoized to avoid making duplicate requests for the same data
              during a React render pass.
            </li>
          </ul>
        </div>
      </section>

      <section className="font-[300]">
        <h2 className="font-bold">Data Cache Revalidation</h2>
        <p>
          Time Based Revalidation - invalidate after a certain amount of time
          and a new request has been made{" "}
          <b className="block">
            {`fetch('https:...', { next: { revalidate: 3600 } })`}
          </b>
        </p>
        <p>
          On-demand Revalidation - revalidate based on the event. e.g after a
          form submission. This is useful when you want to ensure the latest
          data is shown as soon as possible (e.g. when content from your
          headless CMS is updated).
        </p>
      </section>
    </div>
  );
};

export default DataCache;
