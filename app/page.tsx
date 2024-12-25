import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Navbar from "../components/Base/Navbar";
import HeroSection from "@/components/Base/HeroSection";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar user={session?.user ?? null} />
      <HeroSection />
    </div>
  );
}
