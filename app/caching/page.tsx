import Link from "next/link";

const Caching = () => {
  return (
    <div>
      <h1>Caching</h1>
      <p className="font-[300]">
        NextJs statically render your routes and cache your data request by
        default
      </p>
      <ul className=" text-blue-600">
        <li>
          <Link href="/caching/request">Request Memoization</Link>
        </li>
        <li>
          <Link href="/caching/data-cache">Data Cache</Link>
        </li>
        <li>
          <Link href="/caching/full-cache">Full Cache Route</Link>
        </li>
      </ul>
    </div>
  );
};

export default Caching;
