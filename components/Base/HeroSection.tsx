import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Deep dive into the tools
      </h1>
      <p className="text-xl text-gray-600 mb-8">
         makes it effortless to learn and research about finance.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          View Dashboard
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        <Image
          src="/images/homepage/homepage-bg.svg"
          width={100}
          height={100}
          alt="Illustration"
          className="h-auto"
        />
      </div>
    </section>
  );
}
