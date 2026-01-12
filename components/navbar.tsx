"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between gap-2">
            <Image
              src={"/dc.svg"}
              alt="Dewan Hukum Siber Indonesia Logo"
              width={48}
              height={48}
            />

            {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HS</span>
            </div> */}
            <span className="font-bold text-xl text-foreground hidden sm:inline">
              Dewan Hukum Siber Indonesia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              className="text-foreground hover:text-primary transition"
            >
              Program
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Mandat
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary transition"
            >
              Mitra
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Unduh Profil</Button>
            <Button>Hubungi Sekretariat</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 mt-4">
            <a
              href="#courses"
              className="block text-foreground hover:text-primary"
            >
              Program
            </a>
            <a
              href="#features"
              className="block text-foreground hover:text-primary"
            >
              Mandat
            </a>
            <a
              href="#testimonials"
              className="block text-foreground hover:text-primary"
            >
              Mitra
            </a>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button variant="outline" className="w-full bg-transparent">
                Unduh Profil
              </Button>
              <Button className="w-full">Hubungi Sekretariat</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
