import Link from "next/link";

const Caching = () => {
  return (
    <div>
      Caching{" "}
      <ul className=" text-blue-600 flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Caching;
