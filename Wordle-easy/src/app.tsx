import "./app.css";

export function App() {
  return (
    <>
      <header className="flex items-center justify-center">
        <h1>Wordle</h1>
      </header>
      <main class="flex justify-center">
        <section className="grid grid-cols-5 max-w-xl gap-4 justify-center items-center">
          <div className="border-2 flex justify-center items-center ">x</div>
          <div className="border-2 flex justify-center items-center ">x</div>
          <div className="border-2 flex justify-center items-center ">x</div>
          <div className="border-2 flex justify-center items-center ">x</div>
          <div className="border-2 flex justify-center items-center ">x</div>
        </section>
      </main>
    </>
  );
}
