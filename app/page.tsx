import Image from "next/image";
import Hello from "./components/hello";
export default function Home() {
  console.log("Comment je suis -- SERVER/CLIENT")

  return (
    <div>
      <Hello/>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
