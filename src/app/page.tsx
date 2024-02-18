import Card from "@/components/Card";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-8 pb-12 hidden max-sm:block">
        <h1>Dukaan is better on app</h1>
        <button className="btn btn-primary">
          <a
            href="https://expo.dev//accounts/jashagrawal/projects/Dukaan/builds/bfd7baae-fc72-41f2-908b-1ba75bef7f53"
            target="_blank"
          >
            Download Now
          </a>
        </button>
      </div>
      <Hero />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
    </div>
  );
}
