import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Dewan Hukum Siber Indonesia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Kolaborasi pakar hukum, teknologi, dan regulator untuk membangun
              ekosistem digital yang aman, beretika, dan berkeadilan di
              Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Gabung Sebagai Anggota <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Unduh Profil Dewan
              </Button>
            </div>
            <div className="flex gap-8 text-sm">
              <div>
                <div className="font-bold text-2xl text-primary">120+</div>
                <div className="text-muted-foreground">Pakar & Praktisi</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">30+</div>
                <div className="text-muted-foreground">Program & Inisiatif</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">10+</div>
                <div className="text-muted-foreground">
                  Kolaborasi Strategis
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="hidden md:block relative h-128">
            <Image
              src="/sahromen.jpg"
              alt="Ilustrasi dewan hukum siber"
              fill
              className="object-contain"
            />
          </div> */}

          <div className="h-102 w-102  bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}
