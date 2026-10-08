import { useEffect, useState } from "react";
import { ArrowRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { getProducts } from "../api";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import HeroCarousel from "../components/HeroCarousel";
import HeroBackground from "../components/HeroBackground";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Products load nahi ho sakay. Dobara try karein."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* HERO */}
<section className="relative min-h-[88vh] flex items-center overflow-hidden">
  <HeroBackground />

  <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
    <div className="max-w-2xl">
      <span className="inline-block bg-white/10 text-sage text-sm px-4 py-1.5 rounded-full border border-white/10 backdrop-blur">
        New Season Collection
      </span>

      <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
        Shop with <span className="text-sage italic">style</span>,<br />
        live with ease.
      </h1>

      <p className="text-white/75 mt-6 max-w-md text-lg">
        Discover handpicked products at prices you will love. Fast delivery, easy returns.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#products"
          className="inline-flex items-center gap-2 bg-sage text-ink font-semibold px-8 py-3.5 rounded-full hover:bg-white transition"
        >
          Shop Now <ArrowRight size={18} />
        </a>
        <a
          href="#products"
          className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition"
        >
          Explore
        </a>
      </div>
    </div>
  </div>
</section>
          

      {/* FEATURES STRIP */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-deep/10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-sage/30">
          {[
            { icon: Truck, title: "Free Delivery", text: "On orders over $50" },
            { icon: ShieldCheck, title: "Secure Payment", text: "100% protected" },
            { icon: RotateCcw, title: "Easy Returns", text: "7 days return policy" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 p-6">
              <span className="w-12 h-12 rounded-2xl bg-mist text-leaf flex items-center justify-center">
                <Icon size={24} />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-ink/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-4 pt-20">
        <div className="text-center mb-12">
          <p className="text-leaf font-medium tracking-widest text-sm uppercase">Our Collection</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Featured Products</h2>
        </div>

        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}