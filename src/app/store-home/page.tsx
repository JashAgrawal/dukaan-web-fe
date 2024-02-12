import Card from "@/components/Card";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function StoreHome() {
  return (
    <div className="space-y-8 pb-12">
      <Hero />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
      <ProductSection heading="Best Sellers" products={[1, 2, 3, 4]} />
    </div>
  );
}
