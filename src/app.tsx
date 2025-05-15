import "./app.css";

export function App() {

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];
  return (
    <>
      <header className="flex items-center justify-center">
        <h1>Wordle</h1>
      </header>
      <main className="flex flex-col gap-5">
        <section className="grid grid-cols-5 max-w-xl gap-4 justify-center items-center m-auto">
          <div className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">x</div>
          <div className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">x</div>
          <div className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">x</div>
          <div className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">x</div>
          <div className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">x</div>
          </section>
          <section>
            {keyboardRows.map((row, i) => (
              <div key={i} className="flex justify-center gap-1">
                {row.map((key) => (
                  <button
                    key={key}
                    className={`bg-gray-300 rounded font-bold text-lg px-3 py-2 m-0.5 
                      flex items-center justify-center 
                      ${key === "Enter" || key === "⌫" ? "w-16" : "w-10"}`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </section>
      </main>
    </>
  );
}
