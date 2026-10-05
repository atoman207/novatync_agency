import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import { getPortfolioFromDb } from "@/lib/portfolio/db";
import { buildPortfolioData } from "@/lib/portfolio/utils";

export const dynamic = "force-dynamic";

export default async function Home() {
  let portfolio;

  try {
    portfolio = await getPortfolioFromDb();
  } catch {
    portfolio = buildPortfolioData([]);
  }

  return (
    <>
      <Hero />
      <Works portfolio={portfolio} />
      <About />
      <Contact />
    </>
  );
}
