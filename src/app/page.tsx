import { AboutMeSection } from "~/components/ui/about-me-section/about-me-section";

export default function Home() {
  /* @ts-expect-error Async Server Component */
  return <AboutMeSection />;
}
