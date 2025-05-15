import "./app.css";
import Keyboard from "./components/Keyboard";
import Rows from "./components/Rows";

export function App() {


  return (
    <>
      <header className="flex items-center justify-center">
        <h1>Wordle</h1>
      </header>
      <main className="flex flex-col gap-5">
        <Rows />
        <section>
          <Keyboard />
        </section>
      </main>
    </>
  );
}
