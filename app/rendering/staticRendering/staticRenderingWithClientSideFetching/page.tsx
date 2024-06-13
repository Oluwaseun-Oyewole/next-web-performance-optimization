"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const StaticRenderingWithClientSideFetching = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result: DataType[] = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Error while fetching");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="font-light overflow-y-scroll h-screen mt-20">
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
      <h1>StaticRenderingWithClientSideFetching</h1>
      <p>
        This is a great pattern that contain pages that should renew on every
        request. E.g fetching all recent listing
      </p>

      <p className="font-medium py-5">
        This renders some part of the page as static and while the dynamic
        content is loading {"it's "} a loading skeleton
      </p>

      <p className="font-medium py-5">
        Note: you should mostly use this pattern when you have fetch data at
        request as oppose to build. Only fetch data that are not personalized.
      </p>
      <section className="mt-10 ">
        {loading ? (
          <p aria-live="polite" aria-atomic="true">
            loading..
          </p>
        ) : (
          <ul
            className="h-[400px] overflow-y-scroll"
            aria-live="assertive"
            aria-atomic="true"
          >
            {data?.map((item, index) => {
              return (
                <li key={index}>
                  {item.id} - {item?.title}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h1>Advantages of PSS</h1>
        <ul className="font-light">
          <li>Fast TTB</li>
          <li>Fast FCP</li>
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
        <h1>Disadvantages of PSS</h1>
        <ul className="font-light">
          <li>Low LCP</li>
          <li> There is CLS</li>
          <li>Faster build time</li>
          <li>
            High server cost depending on the volume of data being fetched and
            we are also calling the api on every page load
          </li>
          <li>No Reliable uptime due to network speed</li>
          <li>No Scalable Infrastructure</li>
        </ul>
      </section>
    </main>
  );
};

export default StaticRenderingWithClientSideFetching;
