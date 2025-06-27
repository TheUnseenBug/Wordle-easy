import Boxes from './Boxes'

const Rows = ({wordCount}: {wordCount: number}) => {
  return (
    <>
    <section className="grid grid-cols-5 max-w-xl gap-4 justify-center items-center m-auto">
      <Boxes wordCount={wordCount} />
      <Boxes wordCount={wordCount} />
      <Boxes wordCount={wordCount} />
      <Boxes wordCount={wordCount} />
      <Boxes wordCount={wordCount} />
      <Boxes wordCount={wordCount} />
    </section>
    </>
  )
}

export default Rows