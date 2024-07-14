const DataFetchingPatterns = () => {
  return (
    <div>
      <h1 className="text-2xl text-blue-600">
        Data Fetching Patterns and best practices
      </h1>
      <section className="text-sm font-[300] py-4">
        <h2 className="text-lg text-blue-600 font-medium">
          Fetch data on the sever
        </h2>
        <p>whenever possible fetch data on the server with server components</p>
        <p>One reason is that you have direct access to backend resources</p>
        <p>
          Security as you keep sensitive information like tokens,api keys etc on
          the server.
        </p>
        <p>
          Fetching and rendering data on the server increases speed and reduces
          work on the main thread on the client
        </p>
        <p>
          It also moves data fetching closer to your data source depending on
          the region reducing latency and increasing performance.
        </p>
      </section>
      <section className="text-sm font-[300] ">
        <h2 className="text-lg text-blue-600 font-medium">
          Fetch data where it is needed
        </h2>
        <p>
          If you need to use the same data (e.g. current user) in multiple
          components in a tree, you do not have to fetch data globally, nor
          forward props between components.
        </p>

        <p>
          Instead, you can use fetch or React cache in the component that needs
          the data without worrying about the performance implications of making
          multiple requests for the same data.
        </p>
      </section>
      <section className="text-sm font-[300] ">
        <h2 className="text-lg text-blue-600 font-medium">Streaming</h2>
        <p>
          Streaming and Suspense are React features that allow you to
          progressively render and incrementally stream rendered units of the UI
          to the client as they become available.
        </p>
      </section>
    </div>
  );
};

export default DataFetchingPatterns;
