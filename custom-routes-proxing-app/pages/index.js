import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h3>Hello World.</h3>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/hello/[slug]" as="/hello/world">
        <a>Hello world</a>
      </Link>
      <br />
      <Link href="/di">
        <a>Di</a>
      </Link>
      <br />
      <Link href="/lib-import">
        <a>lib import</a>
      </Link>
    </div>
  );
}
