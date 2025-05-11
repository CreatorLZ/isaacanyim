import React from "react";
import web1 from "/public/web1.jpg";
import web2 from "/public/web2.jpg";
import code from "/public/code.png";
import Isaac from "/public/isaac.jpeg";
import product1 from "/public/product1.jpg";
import product2 from "/public/product2.jpg";
import automation3 from "/public/automation3.jpg";
import automation4 from "/public/automation4.jpg";
import seo1 from "/public/seo1.jpg";
import seo2 from "/public/seo2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-28">
      <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-700">
        How Can I Help?
      </h2>
      <p className="text-center text-base font-medium text-gray-700 mb-10">
        Let’s turn your vision into something amazing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Web Design Card */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={web1}
                alt="Web Design"
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110"
              />
              <Image
                src={code}
                alt="Code"
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">Website Design</h3>
        </div>

        {/* Mobile App Design Card */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={web2}
                alt="Web Development "
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110 "
              />
              <Image
                src={web1}
                alt="Website Development"
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">Website Development</h3>
        </div>

        {/* Framer Development Card */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={seo1}
                alt="Framer Development"
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110"
              />
              <Image
                src={seo2}
                alt="Development"
                quality={100}
                fill
                className="object-fill rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">
            Search Engine Optimization
          </h3>
        </div>

        {/* Social Media Graphics */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={automation4}
                alt="Social Media Graphics"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110"
              />
              <Image
                src={automation3}
                alt="Graphics"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">
            Workforce Automation
          </h3>
        </div>

        {/* Pitch Decks */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={product2}
                alt="Pitch Decks"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110"
              />
              <Image
                src={product1}
                alt="Decks"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">Product Design</h3>
        </div>

        {/* Branding */}
        <div className="backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_4px_6px_0_rgba(31,38,135,0.25)] rounded-lg p-4 transition-all duration-300 group">
          <div className="h-40 relative rounded-md mb-3 flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src={product1}
                alt="Branding"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform -translate-x-4 -rotate-12 transition-all duration-300 group-hover:-rotate-[24deg] group-hover:scale-110"
              />
              <Image
                src={product2}
                alt="Brand"
                quality={100}
                fill
                className="object-cover rounded-lg absolute transform translate-x-4 rotate-12 transition-all duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-sm font-bold text-center">Branding</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
