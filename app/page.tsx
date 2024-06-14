import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl underline">Topics</h1>
      <ul className=" text-blue-600 flex items-center gap-3">
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
