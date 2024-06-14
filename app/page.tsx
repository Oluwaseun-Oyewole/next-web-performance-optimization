import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl underline">Topics</h1>
      <ul className="p-5 text-blue-600">
        <li>
          <Link href="/rendering">Rendering</Link>
        </li>
        <li>
          <Link href="/caching">Caching</Link>
        </li>
      </ul>
    </main>
  );
}
