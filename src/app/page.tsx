"use client";
import VicAbout from "./components/VicAbout";
import VicHero from "./components/VicHero";
import VicNavbar from "./components/VicNavbar";
import VicPrograms from "./components/VicPrograms";
import VicContact from "./components/VicContact"; 
import VicFooter from "./components/VicFooter";
import VicScroll from "./components/VicScroll";

export default function Home() {
  return (
    <>
      <VicNavbar />
      <div>
        <main className="flex flex-col gap-0 min-h-screen font-[family-name:var(--font-geist-sans)]">
          <VicHero />
          <VicAbout /> 
          <VicPrograms />
          <VicContact />
          <VicScroll />
        </main>
        <VicFooter />
      </div>
    </>
  );
}
