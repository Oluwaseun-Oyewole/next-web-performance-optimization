const RequestMemoization = () => {
  return (
    <div>
      <h1 className="font-bold text-xl py-2 text-blue-500">
        Request Memoization
      </h1>
      <section className="font-[350]">
        <p>
          React by default automatically memoize data request that has the
          <b className="px-1">same URL and options</b>. This means it can only
          execute a fetch function only
          <b className="px-1">ONCE</b> for the same data even if it is called in
          multiple places
        </p>
        <br />

        <p>
          So if you need the same data for the multiple components on the
          server, you obviously can not use React Context(it does not work on
          the server). One thing you can do is to move your your api call up the
          react tree and pass the data as props to places it is need.
        </p>
        <br />
        <p>
          Or you can just fetch the data in all the places that needs with
          worrying about calling the api multiple times across the same network
          for the same data because with request memoization, the api call will
          once execute ONCE for data of the same URL and options
        </p>
        <br />
        <div>
          <b>Notes:</b>
          <p>
            Request Memoization only happens to the GET method in fetch request
          </p>
          <p>
            Memoization only applies in react component tree and only last the
            lifetime of the server request until the react component tree has
            finished rendering.
          </p>
          <p>
            There is no revalidation since it only applies during server
            rendering
          </p>
        </div>
        <br />
      </section>
    </div>
  );
};

export default RequestMemoization;
