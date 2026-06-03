"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Maximize2, MapPin } from "lucide-react";
import { type Property, formatPrice } from "@/lib/properties";

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/biens/${property.slug}`} className="group block cursor-pointer">
        {/* Image */}
        <div className="overflow-hidden aspect-[4/3] mb-4 relative">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-3 left-3 bg-[var(--gold)] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {property.status}
          </span>
          <span className="absolute top-3 right-3 glass text-[var(--cream)] text-[10px] tracking-[0.15em] uppercase px-3 py-1">
            {property.type}
          </span>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-cinzel text-white text-sm font-medium leading-snug group-hover:text-[var(--gold)] transition-colors duration-300">
                {property.title}
              </h3>
              <p className="flex items-center gap-1 text-white/50 text-xs mt-1">
                <MapPin size={11} />
                {property.location}
              </p>
            </div>
            <p className="font-cinzel text-white text-sm font-semibold whitespace-nowrap shrink-0">
              {formatPrice(property.price, property.status)}
            </p>
          </div>

          <div className="flex items-center gap-4 text-white/40 text-xs mt-3 pt-3 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Maximize2 size={11} />
              {property.area} m²
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={11} />
              {property.bedrooms} ch.
            </span>
            <span>{property.rooms} pièces</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
