import { useState, useEffect } from "preact/hooks";
import "./app.css";
import Keyboard from "./components/Keyboard";
import Rows from "./components/Rows";
import { fetchWords, Word } from "./hooks/fetchWords";

export function App() {
const wordCount = 5;
const [words, setWords] = useState<Word[] | undefined>(undefined);

  useEffect(() => {
    fetchWords().then(setWords);
  }, []);

  console.log(words);

  return (
    <>
      <header className="flex items-center justify-center">
        <h1>Wordle</h1>
      </header>
      <main className="flex flex-col gap-5">

        <section className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">
            What is this?
          </h2>
          <img src="https://www.welcometowordle.com/" alt="" className="w-24 h-24" />
        </section>
        
        <Rows wordCount={wordCount} />
        <section> 
          <Keyboard />
        </section>
      </main>
    </>
  );
}
