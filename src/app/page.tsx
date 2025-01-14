import MainHeader from "@/components/Header";
import ResultsArea from "@/components/ResultsArea";
import UrlShortenerForm from "@/components/URLShortenerForm";

export default function Home() {
  return (
    <main>
      <section>
        <MainHeader />
        <UrlShortenerForm />
        <ResultsArea />
      </section>
    </main>
  );
}
