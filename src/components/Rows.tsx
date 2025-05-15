import Boxes from './Boxes'

const Rows = () => {
  return (
    <>
    <section className="grid grid-cols-5 max-w-xl gap-4 justify-center items-center m-auto">
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
    </section>
    </>
  )
}

export default Rows