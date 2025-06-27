const Boxes = ({wordCount}: {wordCount: number}) => {
  return (
    <>
    {Array.from({ length: wordCount }, (_, i) => i).map((index) => (
      <div key={index} className="border-2 flex justify-center items-center bg-slate-500 w-16 h-16">X</div>
    ))}
    </>
  )
}

export default Boxes