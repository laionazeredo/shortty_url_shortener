import MainHeader from "@/components/Header";
import ResultsArea from "@/components/ResultsArea";
import UrlShortenerForm from "@/components/URLShortenerForm";
import { UrlShortenerProvider } from "@/contexts";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="w-full max-w-2xl mx-auto">
        <UrlShortenerProvider>
          <MainHeader />
          <UrlShortenerForm />
          <ResultsArea />
        </UrlShortenerProvider>
      </section>
    </main>
  );
}
