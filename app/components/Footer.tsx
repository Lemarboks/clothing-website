export default function Footer() {
  return (
    <footer className="border-t border-[#f3efe5]/15 bg-[#080808] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="kicker mb-3">Sench//Store</p>
          <h2 className="section-title max-w-2xl text-[clamp(2rem,5vw,5rem)]">
            Mzansi x LDN streetwear.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#f3efe5]/65">
            Copyright Street Wear Co. All rights reserved. Built as a shop rail
            with a street-style magazine skin.
          </p>
        </div>
        <div className="self-end">
          <div className="issue-stripe mb-5 h-3" />
          <div className="flex flex-wrap gap-4 text-[0.72rem] font-black uppercase tracking-[0.12em]">
            <a href="#" className="text-[#f3efe5]/70 transition-colors hover:text-[#d8ff3f]">
              Street Wear Co.
            </a>
            <a href="#" className="text-[#f3efe5]/70 transition-colors hover:text-[#d8ff3f]">
              Privacy
            </a>
            <a href="#" className="text-[#f3efe5]/70 transition-colors hover:text-[#d8ff3f]">
              Shop glossary
            </a>
            <a href="#" className="text-[#f3efe5]/70 transition-colors hover:text-[#d8ff3f]">
              Access to information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
