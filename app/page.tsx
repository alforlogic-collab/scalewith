import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SystemNetwork from "@/components/SystemNetwork";
import Capabilities from "@/components/Capabilities";
import TransformationSection from "@/components/TransformationSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustryExplorer from "@/components/IndustryExplorer";
import SystemDemo from "@/components/SystemDemo";
import AIConsole from "@/components/AIConsole";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <SystemNetwork />
        <Capabilities />
        <TransformationSection />
        <ProcessTimeline />
        <IndustryExplorer />
        <SystemDemo />
        <AIConsole />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
