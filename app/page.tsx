import Navbar from "../components/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            Welcome to Orvionn
          </h1>
        </section>
      </main>
    </>
  );
}