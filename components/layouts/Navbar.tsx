export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">ORVIONN</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Technologies</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>

        {/* CTA */}
        <button className="rounded-full bg-[#1F6DB5] px-6 py-3 text-white transition hover:bg-[#2C7CC9]">
          Get Free Consultation
        </button>
      </div>
    </header>
  );
}