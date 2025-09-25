import AccessibleNavigation from "@/components/AccessibleNavigation";

function App() {
  return (
    <main className="mx-auto max-w-[850px] px-4 py-24">
      <h1 className="mb-6 text-3xl font-bold">Accessible App Examples</h1>
      <main>
        <section id="Navigation" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Navigation</h2>
          <AccessibleNavigation />
        </section>
      </main>
    </main>
  );
}

export default App;
