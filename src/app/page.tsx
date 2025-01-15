import MainHeader from "@/components/Header";
import ResultsArea from "@/components/ResultsArea";
import UrlShortenerForm from "@/components/URLShortenerForm";
import { UrlShortenerProvider } from "@/contexts";

export default function Home() {
  return (
    <main>
      <section>
        <UrlShortenerProvider>
          <MainHeader />
          <UrlShortenerForm />
          <ResultsArea />
        </UrlShortenerProvider>
      </section>
    </main>
  );
}
