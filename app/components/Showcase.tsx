'use client';

import Link from 'next/link';
import { products } from '../data/products';

const featureImages = [
  products[1].images.Navy,
  products[3].images.Pink,
  products[4].images.Black,
  products[0].images.White,
  products[2].images.Navy,
];

export default function Showcase() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_28%,rgba(227,76,56,0.28),transparent_28%),radial-gradient(circle_at_92%_14%,rgba(216,255,63,0.16),transparent_24%)]" />
      <div className="issue-stripe absolute inset-x-0 bottom-0 h-4" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-2 border-y border-[#f3efe5]/25 bg-[#080808]/60 py-3 text-[0.76rem] font-black uppercase tracking-[0.12em] text-[#f3efe5]/75 sm:grid-cols-3">
          <span>JHB / CPT / DBN</span>
          <span className="sm:text-center">Drop 04</span>
          <span className="sm:text-right">London street codes</span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <div>
            <p className="kicker mb-4">Sench//Index / Mzansi x LDN shop file</p>
            <h1 className="masthead mb-6">
              Streetwear
              <span className="block text-[#d8ff3f]">made for</span>
              <span className="block text-transparent [-webkit-text-stroke:1.5px_#f3efe5]">
                city light.
              </span>
            </h1>
            <p className="max-w-2xl border-l-4 border-[#e34c38] pl-4 text-base text-[#f3efe5]/75">
              A cross-city clothing drop linking South African colour, township tailoring,
              amapiano-night silhouettes, and London streetwear codes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-[#007a3d] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em]">
                Mzansi colour
              </span>
              <span className="bg-[#0b39a6] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em]">
                LDN layers
              </span>
              <span className="bg-[#ffcd00] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#080808]">
                Archive fit
              </span>
              <span className="bg-[#e34c38] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em]">
                Night rail
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="archive-button">
                Shop the archive
              </Link>
              <Link href="/women" className="ghost-button">
                View edits
              </Link>
            </div>
          </div>

          <div className="grid min-h-[620px] grid-cols-6 grid-rows-6 gap-3 max-sm:min-h-0">
            {featureImages.map((image, index) => (
              <figure
                key={image}
                className={`clip-frame relative overflow-hidden ${
                  index === 0
                    ? 'col-span-3 row-span-4 rotate-[-6deg]'
                    : index === 1
                      ? 'col-span-3 row-span-3 rotate-[4deg]'
                      : index === 2
                        ? 'col-span-4 row-span-3 rotate-[7deg]'
                        : index === 3
                          ? 'col-span-2 row-span-2 rotate-[-3deg]'
                          : 'col-span-2 row-span-2 rotate-[-8deg]'
                } max-sm:col-span-6 max-sm:row-span-2 max-sm:rotate-0`}
              >
                <span className="issue-label absolute left-2 top-2 z-10">
                  {index % 2 === 0 ? 'JHB / LDN' : 'CPT / SOHO'}
                </span>
                <img src={image} alt="Mzansi x LDN streetwear editorial" className="h-full object-cover transition duration-500" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
