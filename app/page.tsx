import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl underline">Topics</h1>
      <ul className="pt-5 text-blue-600 flex flex-col">
        <li>
          <Link href="/rendering">Rendering</Link>
        </li>

        <li>
          <Link href="/caching">Caching</Link>
        </li>
        <li>
          <Link href="/edge">Middleware-Edge-Serverless Functions</Link>
        </li>

        <li>
          <Link href="/fetching">Data Fetching</Link>
        </li>
        <li>
          <Link href="/typescripts">Typescript</Link>
        </li>
      </ul>
    </main>
  );
}
