import Spinner from "../components/Spinner"
import useFetch from "../hooks/useFetch"
import Image from "../components/Image"

const PicsOfTheDay = () => {
  const { data, error, isLoading } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=",
    "&count=5"
  )

  return (
    <section className="min-h-screen pt-12 px-2 pb-2 flex flex-col items-center justify-center">
      <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl py-2">
        Picture Of The Day <span className="text-green-300">+5</span>
      </h1>
      {isLoading && <Spinner />}
      {error && <p className="text-center text-white">Something went wrong</p>}
      <ul>
        {data.map((item) => (
          <Image key={item.title} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default PicsOfTheDay
