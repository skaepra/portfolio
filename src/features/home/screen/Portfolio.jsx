import { useContent } from "../../i18n/LanguageContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import Process from "../components/Process";
import Experience from "../components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  const { t } = useContent();

  return (
    <div id="top" className="min-h-screen scroll-pt-24">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground "
      >
        {t.skip}
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}