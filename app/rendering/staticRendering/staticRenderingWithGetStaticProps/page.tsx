import { NextPage } from "next";
import Link from "next/link";

interface DataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  data: DataType[];
}

const StaticRenderingWithGetStaticProps: NextPage<PageProps> = ({ data }) => {
  return (
    <main className="h-[90vh] overflow-y-scroll font-light">
      <h1 className="font-medium">
        Note : GetStaticProps does not run on app router. You can use
        GetInitialProps instead
      </h1>{" "}
      <br />
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
      <section className="leading-8">
        <h1 className="text-gray-800 underline font-medium">
          StaticRenderingWithGetStaticProps
        </h1>
        <p>This is used for fetching dynamic data that are not user specific</p>
        <p>It fetches dynamic data at build time and can be cached globally</p>
        <p>
          At build time and optionally at runtime with Incremental Static
          Regeneration (ISR).
        </p>
        <p>
          Use Case: Ideal for pages with static content, like marketing pages,
          blog posts, and product pages.
        </p>
      </section>
      <h1>Fetched Data</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {item?.userId} -- {item?.title}
          </li>
        ))}
      </ul>
      <p>
        Here there is no loading components because there will never be a
        loading state because the generated HTML already consist of the HTML
        data
      </p>
      <section className="mt-10">
        <h1 className="text-gray-800 underline font-medium">
          Advantages of SRWGSP
        </h1>
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
      <section className="mt-10">
        <h1 className="text-gray-800 underline font-medium">
          DisAdvantages of SRWGSP
        </h1>
        <ul className="font-light">
          <li>Low build time</li>
          <li>No Personalized Data</li>
        </ul>
      </section>
      <br />
      <section className="font-light">
        <h1 className="font-medium underline">
          What is ISR(Incremental Static Regeneration)
        </h1>
        <p>
          It allows us generate some pages at build time and invalidate the
          cache at certain interval
        </p>
        <p>It also automatically invalidate the cache/regenerate pages</p>
        <p>
          If a user request a page that has not be generated before, the page
          get generated on demand and cached by the edge. Only a first user
          might have a worst TFB byt everyone just gets the cached response
        </p>
        <p>
          One major disadvantage of ISR is the low server cost because we tend
          to revalidate the data whether stale or not, or the content changed or
          not
        </p>
        <br />
      </section>
      <br />{" "}
      <section className="font-light">
        <h1 className="font-medium underline">
          What is OD-ISR(On-Demand Incremental Static Regeneration)
        </h1>
        <p>It allows us regenerate data at certain interval</p>
        <p>Also data that can be cached globally</p>
        <p>
          One major difference between ISR and ODISR is the newly generated page
          for ODISR is distributed throughout the edge network but for ISR the
          response is only cached where the user request it from.
        </p>

        <br />
      </section>
      <section>
        <h1 className="font-medium underline">GetStaticPaths</h1>
        <p>
          Purpose: Defines dynamic routes to be statically generated at build
          time. When to Use: For static generation of dynamic routes where you
          need to specify a list of paths that should be pre-rendered. Runs: At
          build time. Use Case: Ideal for pages with dynamic routes, such as
          blog posts, user profiles, or product pages that have dynamic URL
          segments.
        </p>
      </section>
    </main>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data: DataType[] = await response.json();
//     return { props: { data }, revalidate: 10 };
//   } catch (error) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// };
export default StaticRenderingWithGetStaticProps;
