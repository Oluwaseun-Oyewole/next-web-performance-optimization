import Link from "next/link";

const DataFetching = () => {
  return (
    <div>
      <h1 className="underline">Topics</h1>

      <ul className=" text-blue-600">
        <li>
          <Link href="/fetching/data-fetching">
            Data Fetching, Caching and Revalidation
          </Link>
        </li>

        <li>
          <Link href="/fetching/patterns">Data fetching patterns</Link>
        </li>
      </ul>
    </div>
  );
};

export default DataFetching;
