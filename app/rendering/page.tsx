import Link from "next/link";

const Rendering = () => {
  return (
    <main className="font-light pt-20">
      <h1 className="text-2xl font-bold text-blue-500 py-4">Rendering</h1>

      <div className="text-sm">
        <p>Rendering converts the code you write into user interfaces </p>
        <span>
          <a
            href="https://nextjs.org/docs/app/building-your-application/rendering"
            className="text-blue-700"
          >
            Rendering
          </a>
        </span>
      </div>
      <section className="mt-5">
        <h1>Rendering Patterns in NextJs (Personal note)</h1>
        <ul className="text-blue-700 underline text-sm">
          <li>
            <Link href="/rendering/staticRendering/plainStaticRendering">
              Plain Static Rendering
            </Link>
          </li>
          <li>
            <Link href="/rendering/staticRendering/staticRenderingWithGetStaticProps">
              Static Rendering With GetStaticProps
            </Link>
          </li>
          <li>
            <Link href="/rendering/staticRendering/staticRenderingWithClientSideFetching">
              Static Rendering With Client Side
            </Link>
          </li>
          <li>
            <Link href="/rendering/serverRendering">Server Side Rendering</Link>
          </li>
        </ul>
      </section>

      <section className="mt-5">
        <h1>Videos</h1>
        <ul className="text-blue-700 underline text-sm">
          <li>
            <Link href="https://www.youtube.com/watch?v=PN1HgvAOmi8">
              Advanced Rendering Patterns: Lydia Hallie
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=Nl4OwNhh2QI">
              Streaming in Next.js - Kara Erickson
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-5">
        <h1>Resources</h1>
        <ul className="text-blue-700 underline text-sm">
          <li>
            <Link href="https://cleverzone.medium.com/demystifying-rending-ssr-csr-ssg-isr-of-next-50d9ba368cae">
              Demystifying rendering of NextJS
            </Link>
          </li>
          <li>
            <Link href="https://nextjs.org/learn-pages-router/seo/rendering-and-ranking/rendering-strategies">
              Rendering and Ranking
            </Link>
          </li>
          <li>
            <Link href="https://www.toptal.com/next-js/nextjs-rendering-types-page-speed-optimization">
              Next.js Rendering Techniques: How to Optimize Page Speed
            </Link>
          </li>
        </ul>
      </section>
      <section className="my-5">
        <h1>Keywords </h1>
        <ul className="text-sm">
          <li className="text-gray-800">
            <span className="text-blue-600"> TTFB (Time To First Byte)</span> -
            the time is takes for the client to receive the first byte of the
            page content.
          </li>
          <li className="text-gray-800">
            <span className="text-blue-600"> FCP(First Contentful Paint) </span>
            - the time is takes for the browser to render the first piece of
            content after navigation. A good FCP should be less than 1.8s.
            Anything longer than 3s is considered poor.
          </li>
          <li className="text-gray-800">
            <span className="text-blue-600">LCP(Largest Contentful Paint)</span>{" "}
            -the time is takes to load and render the {"page's"} main content. A
            good FCP should be less than 2.5s. Anything longer than 4s is
            considered poor.{" "}
          </li>
          <li className="text-gray-800">
            <span className="text-blue-600">CLS (Cumulative Layout Shift)</span>
            - Measures the visual stability to avoid unexpected layout shift
          </li>
          <li className="text-gray-800">
            <span className="text-blue-600"> FID(First Input Delay)</span> -
            Time to when the user interacts with the page to the time the event
            handlers are able to run
          </li>
          <li>
            <span className="text-blue-600">TTI (Time To Interactive)</span> -
            The time it takes for the age to starts loading to when {"it's"}{" "}
            reliably responding to users input quickly
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Rendering;
