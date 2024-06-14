import Link from "next/link";

const ServerSideRendering = () => {
  return (
    <main className="font-light">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/rendering" className="text-blue-600">
                Rendering
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="leading-8">
        <h1 className="underline font-medium">ServerSideRendering</h1>
        <p>
          HTML pages are generated at request time as opposed to build time.
        </p>
        <p>
          This is also good for pages that are render blocking maybe due to
          authentication or authorization
        </p>
      </div>
      <section className="my-5">
        <h2 className="underline font-medium">
          Advantages of Server Rendering
        </h2>
        <ul>
          <li>No Cumulative Layout shifts</li>
          <li>Fetching dynamic contents</li>
          <li>For building scalable infrastructure</li>
        </ul>
      </section>

      <section>
        <h2 className="underline font-medium">
          Disadvantages of Server Rendering
        </h2>
        <ul>
          <li>low TTFB</li>
          <li>low FCP/LCP</li>
          <li>Slow TTI</li>
          <li>Slow FID</li>
          <li>High server cost</li>
          <li>No easy rollback</li>
          <li>Inefficient reliable uptime</li>
        </ul>
      </section>
      <section className="my-5">
        <h3 className="underline font-medium">Optimizing SSR</h3>
        <ul>
          <li>Avoid long SSR execution</li>
          <li>Deploy serverless function in region close to your database</li>
          <li>Implement Cache-Controls (If you can not use ISR)</li>
          <li>Upgrade server hardware</li>
        </ul>
      </section>
    </main>
  );
};

export default ServerSideRendering;
