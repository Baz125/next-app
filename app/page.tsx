import Image from "next/image";
import leaves from "@/public/images/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <HeavyComponent></HeavyComponent>
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="course cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
