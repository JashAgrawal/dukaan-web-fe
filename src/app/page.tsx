import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero/>
    <div className="flex space-x-4">
      {[1,2,3,4].map((a)=>
      <Card key={a}/>
      )}
    </div>
    </div>
  );
}
