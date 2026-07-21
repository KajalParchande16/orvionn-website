import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/hero/Hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <main>
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            Welcome to Orvionn
          </h1>
        </section>
      </main> */}
    </>
  );
}