import { useEffect } from "react";
import { Link } from "react-router-dom";
import CarousselSmall from "../Components/CarousselSmall";
import ContactDivArt from "../Components/ContactDivArt";
import { watercolours } from "../data/watercolours";
import { paintings } from "../data/paintings";
import "../CSS/founder.css";
import "../CSS/art.css";

// The carousel above already shows the earliest prints, so the teaser picks from the later ones
const printsPreview = [27, 26, 30, 31, 32, 33, 34, 35].map((id) => watercolours.find((w) => w.id === id));
const salon = [2, 10, 5].map((id) => paintings.find((p) => p.id === id));

const HomeArt = ({ contactPage }) => {
  // Same right-click block as the gallery pages
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div className="founder-page flex flex-col align-start h-full bg-beige">
      <title>Art — Ève Aimée Seni</title>
      <div
        className="flex-1 h-full mainImage no-copy-img"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto/v1/EvePortfolio/Site%20Elements/rgf7retr6bbmukrubgtn")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white portofolio z-20"
          style={{ top: "65%", left: "50%" }}
        >
          <h3 className="didone drop-shadow-sm">Portfolio</h3>
        </div>
      </div>

      <div>
        <CarousselSmall />
      </div>

      <div
        className="flex-1 h-1/2 imageBanner overflow-auto no-copy-img"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto/v1/EvePortfolio/Site%20Elements/ogfx6fjvltuofrw8oqgi")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Prints teaser: same square tiles as /art/prints, first eight only */}
      <section className="marble">
        <div className="max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-12 md:pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow">Photographed, not photoshopped</p>
              <h2 className="section-title !mb-0">Prints &amp; watercolours</h2>
            </div>
            <Link to="/art/prints" className="eyebrow hover:underline !mb-0">
              See all prints →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {printsPreview.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                loading="lazy"
                draggable={false}
                className="w-full aspect-square object-cover no-copy-img"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Salon: a few oils hung like an exhibition */}
      <section className="salon-wall">
        <div className="max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-14 md:pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="eyebrow">Oil on canvas</p>
              <h2 className="section-title !mb-0">Paintings</h2>
            </div>
            <Link to="/art/paintings" className="eyebrow hover:underline !mb-0">
              Visit the gallery →
            </Link>
          </div>
          <div className="salon">
            {salon.map((p) => (
              <figure key={p.id}>
                <div className="canvas">
                  <img src={p.image} alt={p.name} loading="lazy" draggable={false} className="no-copy-img" />
                </div>
                <figcaption>{p.name.replace(/\s*\[.*\]$/, "")}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Raison d'être: Parthenon stone, title left, text right like the founder about block */}
      <section className="sage-band">
        <div className="max-w-[1100px] mx-auto px-6 pt-10 md:pt-14 pb-12 md:pb-20 grid md:grid-cols-[38%_1fr] gap-6 md:gap-10 items-start">
          <div>
            <p className="eyebrow">Why I paint</p>
            <h2 className="section-title">Raison d'être</h2>
          </div>
          <div>
            <p className="mb-3">
              Years ago, I stood in front of Caillebotte's{" "}
              <em>Les raboteurs de parquet</em> in the Musée d'Orsay and it changed me.
            </p>
            <p className="mb-3">
              Everything I began creating since that day has been in hope of recreating that
              moment of transcendence for someone else.
            </p>
            <p className="museum-line">
              Or simply, I make art inspired by places, history, and literature.
            </p>
          </div>
        </div>
      </section>

      <ContactDivArt {...{ contactPage }} />
    </div>
  );
};

export default HomeArt;
