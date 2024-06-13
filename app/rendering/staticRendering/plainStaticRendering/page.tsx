import Link from "next/link";

const PlainStaticRendering = () => {
  return (
    <main>
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
      <section className="font-light">
        <div>
          <h1 className="underline">Plain Static Rendering</h1>
          <p>
            Plain Static Rendering -- These are for pure static data (Pure HTML
            pages)
          </p>
          <p>
            This page is a good example of plain static rendering because it
            just shows the same data for everyone globally
          </p>
          <p>
            We are not fetching any data or showing any personalized components.
            When you deploy this to vercel, the HTML gets generated for all the
            pages and then persisted to all the storage
          </p>
          <p>
            So when a user visits the websites, a request is made to the server
            which can quickly return the generated HTML and has it does this,
            the edge location closest to the user caches the response
          </p>

          <p>
            Since the server already contained the pre generated HTML, we can
            really have a quick TTFT, FCP, LCP, CLS,FID, TTI
          </p>
        </div>
      </section>
      <section className="mt-10">
        <h1>Login Form</h1>
        <form action="">
          <div>
            <label htmlFor="Email">
              Email
              <input
                type="email"
                name=""
                id="Email"
                className="block bg-gray-100 outline-none border-none font-light w-full md:w-[30%] py-3 px-4"
              />
            </label>
          </div>

          <div>
            <label htmlFor="Password">
              Password
              <input
                type="password"
                name=""
                id="Password"
                className="block bg-gray-100 outline-none border-none font-light w-full md:w-[30%] py-3 px-4"
              />
            </label>
          </div>
        </form>

        <p className="font-light">
          In static rendering the browser renders the HTML and optionally
          requests another javascript bundle to hydrate this components. <br />
          Hydration is just binding event handlers to the HTML in order to make
          them interactive. e.g like clicking a button
        </p>
      </section>

      <section className="mt-10">
        <h1>Advantages of PSS</h1>
        <ul className="font-light">
          <li>Fast TTB</li>
          <li>Fast FCP and LCP</li>
          <li>High TTI</li>
          <li>no CLS</li>
          <li>no FID</li>
          <li>Faster build time</li>
          <li>Low server cost</li>
          <li>Easy Rollbacks</li>
          <li>Reliable uptime</li>
          <li>Scalable Infrastructure</li>
        </ul>
      </section>
    </main>
  );
};

export default PlainStaticRendering;
