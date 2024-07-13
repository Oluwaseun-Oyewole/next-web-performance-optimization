import Link from "next/link";

const TypescriptConcepts = () => {
  return (
    <div>
      <h1 className="underline">Topics</h1>
      <ul className=" text-blue-600">
        <li>
          <Link href="/typescripts/interface">Interface</Link>
        </li>
      </ul>
    </div>
  );
};

export default TypescriptConcepts;
