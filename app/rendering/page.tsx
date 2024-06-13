import Link from "next/link";

const Rendering = () => {
  return (
    <main>
      <h1>Rendering</h1>
      <ul>
        <li>
          <br />
          <Link href="/rendering/staticRendering/plainStaticRendering">
            Plain Static Rendering
          </Link>
          <br />
          <Link href="/rendering/staticRendering/staticRenderingWithClientSideFetching">
            Static Rendering With Client Side
          </Link>
          <br />
          <Link href="/rendering/staticRendering/staticRenderingWithGetStaticProps">
            Static Rendering With GetStaticProps
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
};

export default Rendering;
