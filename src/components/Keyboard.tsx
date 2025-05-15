const Keyboard = () => {
    const keyboardRows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
      ];
  return (
    <>
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
            ))}</>
  )
}

export default Keyboard