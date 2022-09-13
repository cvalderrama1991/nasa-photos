import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-red-500 font-bold text-2xl">
        Amazing Images from NASA
      </h1>
      <p>Look into the universe through the eyes of NASA.</p>
      <div className="grid gap-2">
        <Link
          to="/pic-of-day"
          className="bg-red-500 p-2 text-white rounded text-center"
        >
          Picture Of The Day
        </Link>
        <Link
          to="/pics-of-the-day"
          className="bg-red-500 p-2 text-white rounded text-center"
        >
          Picture Of The Day + 5
        </Link>
        <Link
          to="/mars"
          className="bg-red-500 p-2 text-white rounded text-center"
        >
          Mars Rover Curiosity
        </Link>
      </div>
    </section>
  )
}

export default Home
