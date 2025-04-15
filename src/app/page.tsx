import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>All Day Projects</h1>
      <ol>
        <li><Link href="/day-1">Day  1</Link></li>
      </ol>
    </div>
  );
}
