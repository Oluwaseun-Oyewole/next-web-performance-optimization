import Link from "next/link";

const EdgeFunctions = () => {
  return (
    <main>
      <h1>Serverless functions</h1>
      <section>
        <p>
          The major difference between serverless function and edge functions is
          that edge functions are another layer closer to your users
        </p>
      </section>
      <section className="font-light flex items-start ">
        <h1 className="h-fit">Video - </h1>
        <ul className="text-blue-700">
          <li>
            <Link href="https://www.youtube.com/watch?v=yuxd2kurpzk&list=TLPQMTQwNjIwMjT4t0M1hh15gQ&index=2">
              Edge Functions Explained with Kelsey Hightower and Lee Robinson
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default EdgeFunctions;
