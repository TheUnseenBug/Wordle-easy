export type LetterResult = {
  letter: string;
  color: "green" | "orange" | "red";
};

export function evaluateGuess(guess: string, answer: string): LetterResult[] {
  const result: LetterResult[] = [];
  const answerArr = answer.split("");
  const guessArr = guess.split("");
  const answerUsed = Array(answer.length).fill(false);

  // First pass: check for correct letters in correct place (green)
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === answerArr[i]) {
      result[i] = { letter: guessArr[i], color: "green" };
      answerUsed[i] = true;
    } else {
      result[i] = { letter: guessArr[i], color: "red" }; // default to red
    }
  }

  // Second pass: check for correct letters in wrong place (orange)
  for (let i = 0; i < guessArr.length; i++) {
    if (result[i].color === "green") continue;
    for (let j = 0; j < answerArr.length; j++) {
      if (!answerUsed[j] && guessArr[i] === answerArr[j]) {
        result[i].color = "orange";
        answerUsed[j] = true;
        break;
      }
    }
  }
  return result;
}
