import BannerCarrousel from "./components/banner-carrousel";
import OddsCarrousel from "./odds/odds-carousel";
import NewOddsForm from "./odds/new-odds-form";
import CasinoLayout from "./casino/casino-layout";

export default function Home() {
  return (
    <div className="items-center justify-center space-y-6">
      <BannerCarrousel></BannerCarrousel>
      <OddsCarrousel></OddsCarrousel>
      <div className="flex flex-col items-center gap-2 space-y-6">
        <NewOddsForm></NewOddsForm>
        <CasinoLayout></CasinoLayout>
      </div>
    </div>
  );
}
